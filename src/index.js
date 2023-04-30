import "./styles.css";

const onClickAdd = () => {
  //テキストボックスに入力された文字列の取得と初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストを追加する関数
const createIncompleteList = (text) => {
  /* HTMLの出力データの生成 */
  // <div id="list-low">の生成
  const div = document.createElement("div");
  div.className = "list-row";

  // <li>入力されたテキストデータ</li>の生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタンの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 削除処理
    deleteFromIncompleteList(deleteButton.parentNode);

    // 追加処理
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  // 削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除処理
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // <div id="list-low">配下に、<li>と完了・削除ボタンを追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // incomplete-list配下に表示データを追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
