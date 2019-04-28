@echo off
cd /d %0\.. 
set "wd=%cd%"
git checkout master

@call scms --destination %temp%/a1k9
del %temp%\a1k9\_includes /f/s/q
del %temp%\a1k9\_layouts /f/s/q
del %temp%\a1k9\_pages /f/s/q
del %temp%\a1k9\_* /f/s/q
@call git checkout gh-pages

echo %wd%
move %temp%/a1k9 %wd%
start %wd%

pause