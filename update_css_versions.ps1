$files = Get-ChildItem -Path . -Recurse -Include *.html
foreach ($file in $files) {
    (Get-Content $file.FullName) -replace 'style\.css\?v=\d+', 'style.css?v=4' | Set-Content $file.FullName
    (Get-Content $file.FullName) -replace 'transmission\.css\?v=\d+', 'transmission.css?v=3' | Set-Content $file.FullName
}
Write-Output "CSS versions updated."
