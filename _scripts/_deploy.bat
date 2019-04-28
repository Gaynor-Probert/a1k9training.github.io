@echo off
echo %1
cd /d "%1\." 
set "wd=%cd%"
echo %wd%

@call scms --destination %temp%/a1k9
echo Built

echo Cleaning unwanted debris
del %temp%\a1k9\_includes /f/s/q
del %temp%\a1k9\_layouts /f/s/q
del %temp%\a1k9\_pages /f/s/q
del %temp%\a1k9\_* /f/s/q

echo Swithcing branch
@call git checkout gh-pages

echo Copying temp files to gp-pages
move %temp%/a1k9/ %wd%/

echo Done
start %temp%/a1k9
start %wd%

pause