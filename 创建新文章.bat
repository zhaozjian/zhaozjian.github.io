@echo off
echo ================================
echo   Hugo新文章创建工具
echo ================================
echo.

:: 获取文章标题
set /p post_title=请输入文章标题: 
if "%post_title%"=="" (
    echo ? 错误：文章标题不能为空！
    pause
    exit /b 1
)

:: 清理标题（替换空格为-，移除特殊字符）
set "clean_title=%post_title%"
set "clean_title=%clean_title: =-%"
set "clean_title=%clean_title:,=-%"
set "clean_title=%clean_title:?=-%"
set "clean_title=%clean_title:!=-%"

:: 创建文章
echo.
echo ? 正在创建文章: %clean_title%.md
hugo new posts/%clean_title%.md

:: 打开编辑器（修改为您常用的编辑器）
echo ? 正在用默认编辑器打开文件...
start "" "content\posts\%clean_title%.md"

echo.
echo ? 文章已创建！
echo ? 文件位置: content\posts\%clean_title%.md
echo ? 编辑完成后，请运行 deploy.bat 发布文章
echo.
pause