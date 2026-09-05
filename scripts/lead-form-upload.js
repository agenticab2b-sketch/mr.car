(function () {
  'use strict';

  const MAX_FILES = 3;
  const MAX_FILE_BYTES = 5 * 1024 * 1024;
  const MAX_TOTAL_BYTES = 10 * 1024 * 1024;
  const ACCEPT = '.jpg,.jpeg,.png,.heic,.heif,.pdf,image/jpeg,image/png,image/heic,image/heif,application/pdf';
  const FIREBASE_PREVIEW_HOST_RE = /^mrcar-473416--[a-z0-9-]+\.(web\.app|firebaseapp\.com)$/i;

  const MIME_BY_EXTENSION = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    heic: 'image/heic',
    heif: 'image/heif',
    pdf: 'application/pdf'
  };

  const COPY = {
    et: {
      uploadLabel: 'Lisa foto või dokument',
      chooseFiles: 'Vali failid',
      noneSelected: 'Faile pole valitud',
      help: 'JPG, PNG, HEIC või PDF · kuni 3 faili · kuni 5 MB faili kohta',
      foreignNote: 'Kui sõiduk on registreeritud väljaspool Eestit, palun lisage foto sõiduki registreerimistunnistusest. See võimaldab meil sõiduki andmed täpselt kindlaks teha ning sobivad varuosad valida ja tellida.',
      tooMany: 'Lisada saab kuni 3 faili.',
      tooLarge: 'Ühe faili suurus võib olla kuni 5 MB.',
      totalTooLarge: 'Failide kogumaht võib olla kuni 10 MB.',
      badType: 'Lubatud failid: JPG, PNG, HEIC ja PDF.',
      reading: 'Failide lisamine...',
      validation: 'Palun täitke kõik kohustuslikud väljad',
      error: 'Päringut ei õnnestunud saata. Proovige uuesti.',
      success: 'Aitäh! Päring on saadetud.',
      sending: 'Saatmine...'
    },
    ru: {
      uploadLabel: 'Добавить фото или документ',
      chooseFiles: 'Выбрать файлы',
      noneSelected: 'Файлы не выбраны',
      help: 'JPG, PNG, HEIC или PDF · до 3 файлов · до 5 МБ каждый',
      foreignNote: 'Если автомобиль зарегистрирован за пределами Эстонии, пожалуйста, приложите фотографию свидетельства о регистрации транспортного средства. Это позволит нам точно определить данные автомобиля, подобрать и заказать подходящие запасные части.',
      tooMany: 'Можно добавить не более 3 файлов.',
      tooLarge: 'Размер одного файла не должен превышать 5 МБ.',
      totalTooLarge: 'Общий размер файлов не должен превышать 10 МБ.',
      badType: 'Допустимые файлы: JPG, PNG, HEIC и PDF.',
      reading: 'Добавляем файлы...',
      validation: 'Необходимо заполнить выделенные поля',
      error: 'Не удалось отправить заявку. Попробуйте ещё раз.',
      success: 'Спасибо! Заявка отправлена.',
      sending: 'Отправка...'
    },
    en: {
      uploadLabel: 'Add photo or document',
      chooseFiles: 'Choose files',
      noneSelected: 'No files selected',
      help: 'JPG, PNG, HEIC or PDF · up to 3 files · up to 5 MB each',
      foreignNote: 'If the vehicle is registered outside Estonia, please attach a photo of the vehicle registration certificate. This will allow us to accurately identify the vehicle details and select and order the appropriate spare parts.',
      tooMany: 'You can attach up to 3 files.',
      tooLarge: 'Each file must be 5 MB or smaller.',
      totalTooLarge: 'The total attachment size must be 10 MB or smaller.',
      badType: 'Allowed files: JPG, PNG, HEIC and PDF.',
      reading: 'Adding files...',
      validation: 'Please fill in all required fields',
      error: 'Failed to send request. Please try again.',
      success: 'Thank you! Your request has been sent.',
      sending: 'Sending...'
    },
    fi: {
      uploadLabel: 'Lisää kuva tai asiakirja',
      chooseFiles: 'Valitse tiedostot',
      noneSelected: 'Tiedostoja ei ole valittu',
      help: 'JPG, PNG, HEIC tai PDF · enintään 3 tiedostoa · enintään 5 Mt / tiedosto',
      foreignNote: 'Jos ajoneuvo on rekisteröity Viron ulkopuolella, liitäthän valokuvan ajoneuvon rekisteröintitodistuksesta. Näin voimme määrittää ajoneuvon tiedot tarkasti sekä valita ja tilata sopivat varaosat.',
      tooMany: 'Voit liittää enintään 3 tiedostoa.',
      tooLarge: 'Yhden tiedoston koko saa olla enintään 5 Mt.',
      totalTooLarge: 'Tiedostojen yhteiskoko saa olla enintään 10 Mt.',
      badType: 'Sallitut tiedostot: JPG, PNG, HEIC ja PDF.',
      reading: 'Lisätään tiedostoja...',
      validation: 'Täytä kaikki pakolliset kentät',
      error: 'Pyynnön lähettäminen epäonnistui. Yritä uudelleen.',
      success: 'Kiitos! Pyyntösi on lähetetty.',
      sending: 'Lähetetään...'
    }
  };

  function getLanguage(form) {
    const value = String(form.querySelector('input[name="lang"]')?.value || document.documentElement.lang || 'et')
      .toLowerCase()
      .split('-')[0];
    return COPY[value] ? value : 'et';
  }

  function getExtension(fileName) {
    const match = String(fileName || '').toLowerCase().match(/\.([a-z0-9]+)$/);
    return match ? match[1] : '';
  }

  function showMessage(message, isError) {
    if (typeof window.showSnackbar === 'function') {
      window.showSnackbar(message, Boolean(isError));
      return;
    }

    const snackbar = document.getElementById('snackbar');
    if (!snackbar) return;
    snackbar.textContent = message;
    snackbar.className = 'snackbar show';
    if (isError) snackbar.style.backgroundColor = 'var(--error)';
    else snackbar.style.backgroundColor = '';
    window.setTimeout(function () {
      snackbar.className = snackbar.className.replace('show', '');
    }, 4000);
  }

  function addRequiredMarker(form, fieldName) {
    const field = form.querySelector('[name="' + fieldName + '"]');
    if (!field) return;

    field.required = true;
    field.setAttribute('aria-required', 'true');

    const id = field.id;
    const label = id ? form.querySelector('label[for="' + id + '"]') : null;
    if (label && !/\*\s*$/.test(label.textContent || '')) {
      label.textContent = (label.textContent || '').trim() + '*';
    }
  }

  function validateFiles(files, copy) {
    if (files.length > MAX_FILES) return copy.tooMany;

    let total = 0;
    for (const file of files) {
      const extension = getExtension(file.name);
      if (!MIME_BY_EXTENSION[extension]) return copy.badType;
      if (file.size > MAX_FILE_BYTES) return copy.tooLarge;
      total += file.size;
    }

    if (total > MAX_TOTAL_BYTES) return copy.totalTooLarge;
    return '';
  }

  function updateFileList(container, files) {
    if (!container) return;
    container.innerHTML = '';

    for (const file of files) {
      const item = document.createElement('div');
      item.className = 'form-attachments__item';
      item.textContent = file.name + ' · ' + Math.max(1, Math.round(file.size / 1024)) + ' KB';
      container.appendChild(item);
    }
  }

  function createAttachmentField(form, copy) {
    const existing = form.querySelector('input[data-lead-attachments]');
    if (existing) {
      return {
        input: existing,
        list: form.querySelector('[data-lead-attachment-list]')
      };
    }

    const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
    if (!submitButton) return { input: null, list: null };

    const id = 'leadAttachments-' + Math.random().toString(36).slice(2, 9);
    const group = document.createElement('div');
    group.className = 'form-group form-attachments';
    group.innerHTML = [
      '<label for="' + id + '">' + copy.uploadLabel + '</label>',
      '<input id="' + id + '" class="form-attachments__input" type="file" data-lead-attachments multiple accept="' + ACCEPT + '">',
      '<div class="form-attachments__picker">',
      '<button type="button" class="form-attachments__button" data-lead-attachment-button>' + copy.chooseFiles + '</button>',
      '<span class="form-attachments__status" data-lead-attachment-status aria-live="polite">' + copy.noneSelected + '</span>',
      '</div>',
      '<p class="form-attachments__help">' + copy.help + '</p>',
      '<p class="form-attachments__note">' + copy.foreignNote + '</p>',
      '<div class="form-attachments__list" data-lead-attachment-list aria-live="polite"></div>'
    ].join('');

    submitButton.parentNode.insertBefore(group, submitButton);

    const input = group.querySelector('input[data-lead-attachments]');
    const button = group.querySelector('[data-lead-attachment-button]');
    const status = group.querySelector('[data-lead-attachment-status]');
    const list = group.querySelector('[data-lead-attachment-list]');

    button.addEventListener('click', function () { input.click(); });

    input.addEventListener('change', function () {
      const files = Array.from(input.files || []);
      const error = validateFiles(files, copy);
      if (error) {
        input.value = '';
        status.textContent = copy.noneSelected;
        updateFileList(list, []);
        showMessage(error, true);
        return;
      }
      status.textContent = files.length ? files.map(function (file) { return file.name; }).join(', ') : copy.noneSelected;
      updateFileList(list, files);
    });

    return { input, list, status };
  }

  function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onerror = function () { reject(reader.error || new Error('File read failed')); };
      reader.onload = function () {
        const result = String(reader.result || '');
        const comma = result.indexOf(',');
        resolve(comma >= 0 ? result.slice(comma + 1) : result);
      };
      reader.readAsDataURL(file);
    });
  }

  async function serializeAttachments(input, copy) {
    const files = Array.from(input?.files || []);
    const error = validateFiles(files, copy);
    if (error) throw new Error(error);

    return Promise.all(files.map(async function (file) {
      const extension = getExtension(file.name);
      return {
        name: file.name,
        type: MIME_BY_EXTENSION[extension] || file.type || 'application/octet-stream',
        size: file.size,
        data: await fileToBase64(file)
      };
    }));
  }

  function collectData(form) {
    const data = {};
    const formData = new FormData(form);
    for (const pair of formData.entries()) {
      const key = pair[0];
      const value = pair[1];
      if (typeof File !== 'undefined' && value instanceof File) continue;
      data[key] = value;
    }
    return data;
  }

  function validateRequired(form, copy) {
    let hasError = false;
    const requiredFields = Array.from(form.querySelectorAll('[required]'));
    const banner = form.querySelector('#formError') || document.getElementById('formError');

    requiredFields.forEach(function (field) {
      const empty = !String(field.value || '').trim();
      field.classList.toggle('form-error', empty);
      if (empty) hasError = true;
    });

    if (hasError) {
      if (banner) {
        banner.textContent = copy.validation;
        banner.style.display = 'block';
      }
      const first = requiredFields.find(function (field) { return !String(field.value || '').trim(); });
      if (first) first.focus();
      return false;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return false;
    }

    if (banner) banner.style.display = 'none';
    return true;
  }

  function enhanceForm(form) {
    if (!form || form.dataset.leadUploadEnhanced === 'true') return;
    form.dataset.leadUploadEnhanced = 'true';

    const language = getLanguage(form);
    const copy = COPY[language];

    addRequiredMarker(form, 'name');
    addRequiredMarker(form, 'carNumber');

    const attachmentField = createAttachmentField(form, copy);

    form.addEventListener('input', function (event) {
      if (event.target && event.target.classList) event.target.classList.remove('form-error');
    });

    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      event.stopImmediatePropagation();

      if (!validateRequired(form, copy)) return;

      const button = form.querySelector('button[type="submit"], input[type="submit"]');
      const originalHtml = button && button.tagName === 'BUTTON' ? button.innerHTML : null;
      const originalValue = button && button.tagName === 'INPUT' ? button.value : null;

      if (button) {
        button.disabled = true;
        if (button.tagName === 'BUTTON') button.textContent = copy.reading;
        else button.value = copy.reading;
      }

      try {
        const data = collectData(form);
        data.attachments = await serializeAttachments(attachmentField.input, copy);
        data.pageUrl = window.location.href;

        if (button) {
          if (button.tagName === 'BUTTON') button.textContent = copy.sending;
          else button.value = copy.sending;
        }

        const isPreview = FIREBASE_PREVIEW_HOST_RE.test(window.location.hostname);
        const endpoint = isPreview ? '/api/lead-preview' : '/api/lead';
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        let result = null;
        try {
          result = await response.json();
        } catch (error) {
          result = null;
        }

        if (isPreview && result && result.success && result.attachmentsAccepted !== data.attachments.length) {
          throw new Error(copy.error);
        }

        if (!response.ok || !result || !result.success) {
          if (Array.isArray(result?.fields)) {
            result.fields.forEach(function (fieldName) {
              const field = form.querySelector('[name="' + fieldName + '"]');
              if (field) field.classList.add('form-error');
            });
          }
          throw new Error(copy.error);
        }

        showMessage(copy.success, false);
        form.reset();
        updateFileList(attachmentField.list, []);
        if (attachmentField.status) attachmentField.status.textContent = copy.noneSelected;
        const tsStartInput = form.querySelector('[name="tsStart"]');
        if (tsStartInput) tsStartInput.value = Date.now();
      } catch (error) {
        const message = error && error.message && error.message !== 'Failed to fetch' ? error.message : copy.error;
        showMessage(message || copy.error, true);
      } finally {
        if (button) {
          button.disabled = false;
          if (button.tagName === 'BUTTON' && originalHtml !== null) button.innerHTML = originalHtml;
          if (button.tagName === 'INPUT' && originalValue !== null) button.value = originalValue;
        }
      }
    }, true);
  }

  function init() {
    document.querySelectorAll('form#contactForm, form#serviceForm').forEach(enhanceForm);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
