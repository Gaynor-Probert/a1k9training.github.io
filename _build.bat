@echo off
cd /d %0\.. 
set "wd=%cd%"
git checkout master

copy %wd%\_srcipts\_deploy.bat  %temp%\a1k9_deploy.bat
start %temp%\a1k9_deploy.bat "%wd%"
