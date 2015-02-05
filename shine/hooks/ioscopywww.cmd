echo Copying Lightswitch Project www

echo "Deleting files in .\www"
rmdir .\\www /S /Q 

echo "Copying files from .\..\dist to .\www"
xcopy /s .\..\dist\* .\www\