@echo off
cd /d "%~dp0"
echo Running git commands in %CD%
git init
git config user.email "you@example.com"
git config user.name "BookBazaar User"
git add .
git commit -m "Initial commit" || echo No changes to commit
git branch -M main
git remote remove origin 2>nul || rem
git remote add origin https://github.com/InderpalSingh01/BookBazaar.git
git push -u origin main
pause
