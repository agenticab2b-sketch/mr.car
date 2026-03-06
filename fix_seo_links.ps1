# fix_seo_links.ps1
# Глобально заменяет .html ссылки и trailing slashes в HTML файлах проекта Mr.Car

$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$replacements = @(
    # Убрать .html из внутренних ссылок (ru, en, базовые)
    @{from = 'href="/ru/galereya.html"'; to = 'href="/ru/galereya"' },
    @{from = 'href="/ru/uslugi.html"'; to = 'href="/ru/uslugi"' },
    @{from = 'href="/ru/tingimused.html"'; to = 'href="/ru/tingimused"' },
    @{from = 'href="/en/gallery.html"'; to = 'href="/en/gallery"' },
    @{from = 'href="/en/tingimused.html"'; to = 'href="/en/tingimused"' },
    @{from = 'href="/en/prices.html"'; to = 'href="/en/prices"' },
    @{from = 'href="/galerii.html"'; to = 'href="/galerii"' },
    @{from = 'href="/hinnad.html"'; to = 'href="/hinnad"' },
    @{from = 'href="/tingimused.html"'; to = 'href="/tingimused"' },
    @{from = 'href="/teenused.html"'; to = 'href="/teenused"' },
    # Убрать trailing slash с языковых переключателей
    @{from = 'href="/ru/"'; to = 'href="/ru"' },
    @{from = 'href="/en/"'; to = 'href="/en"' },
    # Исправить 404: to-diagnostika -> tehobsluzhivanie-diagnostika
    @{from = '/ru/privaatsus/`"'; to = '/privaatsus"' },
    @{from = 'to-diagnostika'; to = 'tehobsluzhivanie-diagnostika' }
)

$htmlFiles = Get-ChildItem -Path $root -Recurse -Include "*.html" | Where-Object {
    $_.FullName -notmatch '\\node_modules\\' -and
    $_.FullName -notmatch '\\.git\\' -and
    $_.FullName -notmatch '\\.firebase\\' -and
    $_.FullName -notmatch '\\.gemini\\'
}

$changedCount = 0
foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw -Encoding UTF8
    $original = $content
    foreach ($rep in $replacements) {
        $content = $content -replace [regex]::Escape($rep.from), $rep.to
    }
    if ($content -ne $original) {
        [System.IO.File]::WriteAllText($file.FullName, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Fixed: $($file.FullName)"
        $changedCount++
    }
}
Write-Host ""
Write-Host "Done. Fixed $changedCount files." -ForegroundColor Green
