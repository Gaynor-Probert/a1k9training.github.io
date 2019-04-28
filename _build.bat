@echo off
cd /d %0\.. 
set "wd=%cd%"
git checkout master

scms --destination %temp%/a1k9
git checkout gh-pages

echo %wd%
move %temp%/a1k9 %wd%
start %wd%

pause