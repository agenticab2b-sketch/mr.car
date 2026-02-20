import os
import cv2
import numpy as np
from PIL import Image
import pillow_avif

# Настройки папок
IN_DIR = "images_input"
OUT_DIR = "images_ready"

def process():
    # Создаем папку для входа, если её нет
    if not os.path.exists(IN_DIR):
        os.makedirs(IN_DIR)
        print(f"--- Папка '{IN_DIR}' создана. Положи туда фото и запусти снова!")
        return

    if not os.path.exists(OUT_DIR):
        os.makedirs(OUT_DIR)

    files = [f for f in os.listdir(IN_DIR) if f.lower().endswith(('.jpg', '.jpeg', '.png', '.webp'))]
    
    if not files:
        print("--- В папке 'images_input' пусто! Положи туда картинки.")
        return

    print(f"--- Найдено картинок: {len(files)}. Начинаю обработку...")

    for file in files:
        try:
            path = os.path.join(IN_DIR, file)
            img_cv = cv2.imread(path)
            
            # Умный поиск центра (салиентность)
            scale = 400.0 / max(img_cv.shape[:2])
            small = cv2.resize(img_cv, (0,0), fx=scale, fy=scale)
            saliency = cv2.saliency.StaticSaliencySpectralResidual_create()
            success, s_map = saliency.computeSaliency(small)
            
            M = cv2.moments((s_map * 255).astype("uint8"))
            if M["m00"] != 0:
                cX = int((M["m10"] / M["m00"]) / scale)
                cY = int((M["m01"] / M["m00"]) / scale)
            else:
                cX, cY = img_cv.shape[1] // 2, img_cv.shape[0] // 2

            # Сохранение в современный AVIF
            with Image.open(path).convert("RGB") as img_pil:
                name = os.path.splitext(file)[0]
                
                # 1. Основное фото (качество 65 - идеально для веба)
                img_pil.save(os.path.join(OUT_DIR, f"{name}_main.avif"), "AVIF", quality=65, speed=6)
                
                # 2. Превьюшка (300px)
                img_pil.thumbnail((300, 300))
                img_pil.save(os.path.join(OUT_DIR, f"{name}_thumb.avif"), "AVIF", quality=50, speed=8)
            
            print(f"✅ Готово: {file}")
        except Exception as e:
            print(f"❌ Ошибка с {file}: {e}")

if __name__ == "__main__":
    process()