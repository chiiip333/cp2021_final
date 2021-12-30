var tipuesearch = {"pages": [{'title': 'About', 'text': 'Repository:  https://github.com/mdecourse/cp2021_final \n Github Pages:  https://mde.tw/cp2021_final \n Discussion:  https://github.com/mdecourse/cp2021_final/discussions \n 課程網站:  https://mde.tw/cp2021 \n 作業網站:  https://mde.tw/cp2021_hw \n 1a 抽點 10 位學員 查驗其作業倉儲與網站 ( 1a 學員倉儲與網站 ). \n 1b 抽點 10 位學員 查驗其作業倉儲與網站 ( 1b 學員倉儲與網站 ). \n', 'tags': '', 'url': 'About.html'}, {'title': 'Final Project', 'text': 'cp2021 Final Project \n 計算機程式期末學習驗證與評分網站 \n https://mde.tw/cp2021_final \n 倉儲:  https://github.com/mdecourse/cp2021_final \n 本網站自 2021.12.27 起收集各班各分組成員在本學期各項作業與期末專案所完成的成果, 並藉此進行學員的課程學期成績評分. \n cp2021 Final Project \n 計算機程式期末學習驗證與評分網站 \n http://mde.tw/cp2021_final \n 本網站自 2021.12.27 起收集各班各分組成員在本學期各項作業與期末專案所完成的成果, 請根據下列規劃流程, 將個人在本學期所寫過的程式, 以網際按鈕形式呈現在個人所分配的 H3 頁面中, 並藉此進行學員的課程學期成績評分. \n 1a 修課人數 為 64 人, 64 = 7*9 + 1, 分為 9 組. H1 標題為 1a, H2 為 1ag1 ~ 1ag9, 各組員以學號為標題, 依學號遞減排列, 設為 H3 頁面, 各學員則將課程學習成果呈現在各自的 H3 頁面中, 並以 Pull Requests 方式提出拉回合併之請求. \n 1b 修課人數 為 55 人, 55 = 7*8 - 1, 分為 8 組. H1 標題為 1b, H2 為 1bg1 ~ 1bg8, 各組員以學號為標題, 依學號遞減排列, 設為 H3 頁面, 各學員則將課程學習成果呈現在各自的 H3 頁面中, 並以 Pull Requests 方式提出拉回合併之請求. \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'Notice', 'text': '各組必須先自願或推舉出一位組長與一位副組長負責成為  https://github.com/mdecourse/cp2021_final \xa0 倉儲的管理雙人組, 組長將設為期末倉儲的管理協同者, 擁有合併或拒絕 Pull Requests 的權限, 各組推選出兩位管理學員後, 請將學號登錄至  https://github.com/mdecourse/cp2021_final/discussions/1 \n 各學員利用 Pull Requests 將個人的期末評分內容放入本網站的流程: \n \n 登入自己的 Github 帳號. \n fork  https://github.com/mdecourse/cp2021_final  倉儲到自己的帳號下 \n 將自己帳號下的 cp2021_final\xa0 倉儲以 git clone --recurse-submodules url 到近端進行改版. \n 改版後, 在自己帳號下對 cp2021_final 倉儲提交並推送新版本後, 必須在自季的 cp2021_final 倉儲處建立 Pull Request 後, 請組長與副組長查驗合併後內容無誤後, 且合併至主倉儲與  https://mde.tw/cp2021_final  網頁中. \n 若各組員進行 fork 後,  https://github.com/mdecourse/cp2021_final \xa0倉儲已經被其他組員多次改版, 則該組員必須採用反向 Pull Requests, 將自己帳號下的 cp2021_final 倉儲的版本儘量接近之後處理 Pull Requests 時的 cp2021_final 倉儲版本, 以降低各組組員最後進行 Pull Requests 合併時處理衝突的難度. \n 各組組長與副組長接到組員已經完成特定階段新增的 Pull Requests 後, 必須設法將其版本內容合併至期末評分網站中. \n \n', 'tags': '', 'url': 'Notice.html'}, {'title': '1a', 'text': '', 'tags': '', 'url': '1a.html'}, {'title': 'demo', 'text': '', 'tags': '', 'url': 'demo.html'}, {'title': 'scrum-1', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': 'scrum-1.html'}, {'title': 'scrum-3', 'text': 'BSnake \n BSnake 是從  https://hawstein.com/2013/04/15/snake-ai/  ( pdf )修改為能夠在 Brython 網際程式環境中執行的版本. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag Snake BSnake \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': 'scrum-3.html'}, {'title': '1ag1', 'text': '', 'tags': '', 'url': '1ag1.html'}, {'title': '1ag2', 'text': '', 'tags': '', 'url': '1ag2.html'}, {'title': '1ag3', 'text': '', 'tags': '', 'url': '1ag3.html'}, {'title': '1ag4', 'text': '', 'tags': '', 'url': '1ag4.html'}, {'title': '40923129', 'text': '1230測試流程是否正確', 'tags': '', 'url': '40923129.html'}, {'title': '1ag5', 'text': '', 'tags': '', 'url': '1ag5.html'}, {'title': '1ag6', 'text': '', 'tags': '', 'url': '1ag6.html'}, {'title': '1ag7', 'text': '', 'tags': '', 'url': '1ag7.html'}, {'title': '1ag8', 'text': '', 'tags': '', 'url': '1ag8.html'}, {'title': '1ag9', 'text': '', 'tags': '', 'url': '1ag9.html'}, {'title': '1b', 'text': '', 'tags': '', 'url': '1b.html'}, {'title': '1bg1', 'text': '', 'tags': '', 'url': '1bg1.html'}, {'title': '410232-1', 'text': '', 'tags': '', 'url': '410232-1.html'}, {'title': '410232-2', 'text': '', 'tags': '', 'url': '410232-2.html'}, {'title': '410232-3', 'text': '', 'tags': '', 'url': '410232-3.html'}, {'title': '410232-4', 'text': '', 'tags': '', 'url': '410232-4.html'}, {'title': '410232-5', 'text': '', 'tags': '', 'url': '410232-5.html'}, {'title': '410232-6', 'text': '', 'tags': '', 'url': '410232-6.html'}, {'title': '410232-7', 'text': '', 'tags': '', 'url': '410232-7.html'}, {'title': '41023247', 'text': 'w12demo.txt \n ROC 國旗規格 . \n PROC 國旗規格  - 可以根據此規格定義, 新增  PROC flag  按鈕. \n USA 國旗規格  - 可以根據此規格定義, 新增  USA flag  按鈕. \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n add 1 to 100 p261 ROC flag red snake1 w13 w13ch \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': '41023247.html'}, {'title': '1bg2', 'text': '', 'tags': '', 'url': '1bg2.html'}, {'title': '1bg3', 'text': '', 'tags': '', 'url': '1bg3.html'}, {'title': '41023208', 'text': 'https://ziyi8.github.io/cp2021_hw/content/index.html \xa0 \n', 'tags': '', 'url': '41023208.html'}, {'title': '41023210', 'text': 'https://junpig10.github.io/cp2021_hw/content/index.html \xa0 \n', 'tags': '', 'url': '41023210.html'}, {'title': '41023234', 'text': 'https://maskie-razzio.github.io/cp2021_hw/content/index.html \xa0 \n', 'tags': '', 'url': '41023234.html'}, {'title': '41023243', 'text': 'https://kenneth0812.github.io/cp2021_hw/content/index.html \xa0 \n', 'tags': '', 'url': '41023243.html'}, {'title': '41023248', 'text': 'https://smart-777.github.io/cp2021_hw/content/index.html \xa0 \n', 'tags': '', 'url': '41023248.html'}, {'title': '41023251', 'text': 'https://sdegbsvrtg.github.io/cp2021_hw/content/index.html \xa0 \n', 'tags': '', 'url': '41023251.html'}, {'title': '41023253', 'text': 'https://tzm0306.github.io/cp2021_hw/content/index.html \xa0 \n', 'tags': '', 'url': '41023253.html'}, {'title': '41023254', 'text': 'https://41023254.github.io/cp2021_hw/content/index.html \xa0 \n', 'tags': '', 'url': '41023254.html'}, {'title': '1bg4', 'text': '', 'tags': '', 'url': '1bg4.html'}, {'title': '41023212', 'text': '\n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n 紅色 紅色有暫停 亂數英文版 亂數中文版 貪食蛇 一加到十 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': '41023212.html'}, {'title': '41023219', 'text': '\n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n 紅點 紅點按鈕 亂數英文 亂數中文 蛇 1-10 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': '41023219.html'}, {'title': '41023221', 'text': '\n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n 紅點 紅點按鈕 亂數 亂數中文 蛇一般 一加到十 \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': '41023221.html'}, {'title': '41023222', 'text': '', 'tags': '', 'url': '41023222.html'}, {'title': '41023223', 'text': '', 'tags': '', 'url': '41023223.html'}, {'title': '41023224', 'text': '', 'tags': '', 'url': '41023224.html'}, {'title': '41023228', 'text': '\n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n red redP snake snakeA add 1 to 10 random \n randomC \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n', 'tags': '', 'url': '41023228.html'}, {'title': '1bg5', 'text': '', 'tags': '', 'url': '1bg5.html'}, {'title': '1bg6', 'text': '', 'tags': '', 'url': '1bg6.html'}, {'title': '1bg7', 'text': '', 'tags': '', 'url': '1bg7.html'}, {'title': '1bg8', 'text': '', 'tags': '', 'url': '1bg8.html'}]};