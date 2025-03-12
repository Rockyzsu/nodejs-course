const { exec } = require('child_process');

function checkDiskSpace() {
    // 使用 df -h 命令来查看磁盘空间信息
    exec('df -h', (err, stdout, stderr) => {
        if (err) {
            console.error(`执行 df -h 命令出错: ${err.message}`);
            return;
        }
        if (stderr) {
            console.error(`执行 df -h 命令的错误信息: ${stderr}`);
            return;
        }
        // 将输出按行分割
        const lines = stdout.split('\n');
        // 通常情况下，我们关心的是根目录 / 的磁盘空间，它是第二行（第一行是表头）
        const rootLine = lines[1];
        if (rootLine) {
            const parts = rootLine.split(/\s+/);
            // 可用空间通常在第四列
            const availableSpace = parts[3];
            // 将可用空间的字符串表示转换为字节数
            const bytes = convertToBytes(availableSpace);
            const capacity_gb = bytes / (1024 * 1024 * 1024);
            console.log(`磁盘可用空间: ${capacity_gb.toFixed(2)} GB`);
            if (capacity_gb < 1) {
                console.error('磁盘可用空间低于 1GB！');
                // 发送到微信
            } 
        }
    });
}

function convertToBytes(sizeStr) {
    // 假设输入的格式是 "10G", "500M", "20K" 等
    const size = parseFloat(sizeStr);
    const unit = sizeStr.replace(/[0-9\.]/g, '').toUpperCase();
    switch (unit) {
        case 'G':
            return size * 1024 * 1024 * 1024;
        case 'M':
            return size * 1024 * 1024;
        case 'K':
            return size * 1024;
        default:
            return size;
    }
}

checkDiskSpace();