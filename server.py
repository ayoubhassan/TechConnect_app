from livereload import Server
import os

# مجلد المشروع فقط
watch_path = '/storage/emulated/0/Download/project'

# إنشاء السيرفر
server = Server()

# مراقبة كل ملفات المشروع فقط (يشمل .html, .css, .js)
for root, dirs, files in os.walk(watch_path):
    for file in files:
        if file.endswith(('.html', '.css', '.js')):
            server.watch(os.path.join(root, file))

# تشغيل السيرفر
server.serve(root=watch_path, port=8081, host='0.0.0.0')