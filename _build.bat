@echo off
cd /d %0\.. 
set "wd=%cd%"
git checkout master

copy %wd%\_scripts\_deploy.bat  %temp%\a1k9_deploy.bat
start %temp%\a1k9_deploy.bat "%wd%"
