@echo off
echo %1
cd /d "%1\." 
set "wd=%cd%"
echo %wd%

@call scms --destination %temp%/a1k9
del %temp%\a1k9\_includes /f/s/q
del %temp%\a1k9\_layouts /f/s/q
del %temp%\a1k9\_pages /f/s/q
del %temp%\a1k9\_* /f/s/q

@call git checkout gh-pages

move %temp%/a1k9 %wd%
start %temp%/a1k9
start %wd%

pause