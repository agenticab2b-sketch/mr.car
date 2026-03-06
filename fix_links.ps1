$dir = "c:\Users\bumbo\Документы\GitHub\AntigravityAgents\MrCar final"
Get-ChildItem -Path $dir -Recurse -Filter *.html | ForEach-Object {
    $content = Get-Content $_.FullName -Raw -Encoding UTF8
    $original = $content
    $content = $content -replace 'href="/ru/contact"', 'href="/ru/kontakt"'
    $content = $content -replace 'href="/ru/privaatsus/"', 'href="/privaatsus/"'
    $content = $content -replace 'href="/en/privacy/"', 'href="/privaatsus/"'
    $content = $content -replace 'href="/en/privaatsus/"', 'href="/privaatsus/"'
    $content = $content -replace 'href="https://www\.mrcar\.ee/ru/services/to-diagnostika"', 'href="https://www.mrcar.ee/ru/services/tehobsluzhivanie-diagnostika"'
    $content = $content -replace 'href="/ru/services/to-diagnostika"', 'href="/ru/services/tehobsluzhivanie-diagnostika"'
    if ($content -cne $original) {
        Set-Content -Path $_.FullName -Value $content -Encoding UTF8
        Write-Host "Updated $($_.FullName)"
    }
}
Write-Host "DONE"
