@echo off
echo ================================
echo   Hugo博客自动部署工具
echo ================================
echo.

:: 检查是否在Git仓库中
git status >nul 2>&1
if errorlevel 1 (
    echo ? 错误：当前目录不是Git仓库！
    pause
    exit /b 1
)

:: 获取提交信息
set /p commit_msg=请输入本次更新的描述: 
if "%commit_msg%"=="" set commit_msg=博客更新 %date% %time%

:: 执行Git操作
echo.
echo ? 正在添加更改到暂存区...
git add .

echo ? 正在提交更改...
git commit -m "%commit_msg%"

echo ? 正在推送到GitHub...
git push origin main

echo.
echo ? 部署完成！
echo ? 提交信息: %commit_msg%
echo ??  请等待1-3分钟，网站将自动更新
echo ? 访问地址: https://zhaozjian.github.io
echo.
pause