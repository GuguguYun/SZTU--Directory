from pydantic import BaseModel
import pandas as pd
import json
from io import BytesIO
from typing import Optional

import uvicorn
from fastapi import FastAPI

# 步骤1：读取文件为二进制数据
with open("Teachermsgv1.xlsx", "rb") as f:
    excel_bytes = f.read()

# 步骤2：将bytes转为内存中的文件对象
excel_buffer = BytesIO(excel_bytes)

# 步骤3：从内存读取Excel
df = pd.read_excel(excel_buffer)
# 关闭内存中的文件对象
excel_buffer.close()

# 处理可能的NaN值
df = df.where(pd.notnull(df), None)

# 验证数据
# print(df.head())

# 拿到数据后把数据变成json格式
allData_array = json.loads(df.to_json(orient="records"))

# 限制数据的字段
class TeacherData(BaseModel):
    id: int
    name: Optional[str] = None
    sno: Optional[str] = None
    inline: Optional[int] = None
    outline: Optional[int] = None
    department_sno: Optional[int] = None
    department: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None

# 登录函数
adminAccountList = ["Admin","Root","Hello World"]
adminPasswordList = ["Gty147258"]

## 根据一个关键词返回数据
def selectDataByWord(word):
    if not word or word == "":
        return None
    result = []
    for item in allData_array:
        for value in item.values():
            if value is not None and str(word).lower() in str(value).lower():
                result.append(item)
                break
    return result

def selectDataByKeyWords(keywords):
    if not keywords or keywords == []:
        return None

    keywords_list = []
    for k in keywords:
        if k and str(k).strip():
            processed_keyword = str(k).lower().strip()
            if processed_keyword not in keywords_list:
                keywords_list.append(processed_keyword)
    result = []
    for item in allData_array:
        for value in item.values():
            if value is None:
                continue
            str_value = str(value).lower()
            for keyword in keywords_list:
                if keyword in str_value:
                    result.append(item)
                    break
            else:
                continue
            break
    return result

app = FastAPI()

###登录接口
@app.get("/login/{username}/{password}")
async def isLogin(username,password):
    if username in adminAccountList:
        if password in adminPasswordList:
            return 12
        else:
            return 444
    return 444

###查询接口
@app.get("/all")
async def getAllData():
    return allData_array

@app.get("/index/{keyword}")
async def getDataByword(keyword):
    result = selectDataByWord(str(keyword))
    if result is None:
        return allData_array
    return result

class KeywordsModel(BaseModel):
    keywords: list[str]

@app.get("/filter/{keywords}")
async def getDataByKeyWords(keywords):
    keywords = (str(keywords)).split(",")
    result = selectDataByKeyWords(keywords)
    if result is None:
        return allData_array
    return result

## 增加数据接口
@app.post("/add")
async def addData(teacher_data: TeacherData):
    if not teacher_data:
        return {"error": "No data provided"}

    # 检查是否有重复的教师姓名
    for item in allData_array:
        if item.get("id") == teacher_data.id:
            return {"error": "Teacher already exists"}

    # 将新数据添加到数组中
    allData_array.append(teacher_data.dict())

    # 返回更新后的数据
    return allData_array

## 删除数据接口
@app.delete("/delete/{teacher_id}")
async def deleteData(teacher_id: int):
    global allData_array
    # 查找并删除指定ID的教师数据
    allData_array = [item for item in allData_array if item.get("id") != teacher_id]

    # 返回更新后的数据
    return allData_array

## 更新数据接口
@app.put("/update")
async def updateData(teacher_data: TeacherData):
    global allData_array
    # 查找指定ID的教师数据
    for index, item in enumerate(allData_array):
        if item.get("id") == teacher_data.id:
            # 更新数据
            allData_array[index] = teacher_data.dict()
            return allData_array

    return {"error": "Teacher not found"}



if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000)