# 深圳技术大学通讯录

## 前端包含react/vue3两个实现版本
由于项目先使用react做了雏形才转到vue3所以功能没有vue3版本丰富

后端使用FastAPI框架——实现了增删改查四个功能

文件说明：
```
"dbwork": 是react版本前端项目文件夹
"SZTU-Directory": 是vue3版本前端项目文件夹
"dbwork_server": 是fastapi框架实现的后端文件夹
```

## 使用说明
### 前端：
react:
```javacript
npm install //安装依赖 
npm start //启动项目
```

vue3:
```javascript
npm install //安装依赖
npm run dev //启动
```

#### 前端配置了在本机同时运行的proxy，可以手动修改代理
```javascript
// react:
修改 dbwork/package.json 里的"proxy"

// vue3:
修改 SZTU-Directory/vite.config.ts 修改"proxy"
```

### 后端：
```python
pip install -r requirements.txt //安装依赖
### 运行 
```

(数据由excel提供，文件夹中有备份可以随意测试)

