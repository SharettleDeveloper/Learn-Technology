# Markdown (マークダウン) は、 **文章の書き方** です。

デジタル文章を活用する方法として考案されました。特徴は、

- 手軽に文章高尾図を明示できること
- 簡単で、覚えやすいこと
- 読み書きに特別なアプリを必要としないこと
- それでいて、対応アプリを使えば快適に読み書きてできること

などです。
Markdown はジョン・グルーバー (John Gruber) によて 2004 年に開発され、
最初は [Daring Fireball: Markdown](https://daringfireball.net/projects/markdown/) で公開されました。
その後、多くの開発者の手をながら発展してきました。

## 学生のサイト

[satokenai.com](https://satokenai.com)

**大文字になる**
\*\*で囲むと大文字にできます。

1. 一番です

- インのようするね

* 箇条書き

コードを書くときは ```を使います

```js
console.log("コードを実施します");
```

```py
print("マイクロソフトに行きたい!!")
```

```rust
println!("Rust は安全な言語ですぜQ"!)
```

```php
echo ("phpでは$variable で変数を定義します")
```

```sh
ls cd | grep "grep choice" | less | pipe | でつなげる
```

\~\~~~でバツ線を引くことができます~~

`#ffce44`
`rgb(255,0,0)`

-- これでもかこめますぜ　--

<details><summary>サンプルコード</summary>

```rb
puts 'Hello world'
```

</details>

:::note info
information
:::

3. リスト
   エスケープされています

<dl>
    <dt>りんご</dt>
    <dd>赤いフルーツ</dd>
        <dd>英語でaple</dd>
        <dt>りんごの詳細</dt>
        <details><summary>りんごの詳しく</summary>この世界はりんごでできているのだ　。さああなたはこの難問を解くことができるのだろうか</details>
        <dt>階層で行けるか？</dt>
    <dt>オレンジ</dt>
    <dd>橙色のフルーツ</dd>
</dl>

- [ ] タスク
- [x] タスクを入れようぜ
- [ ] タスク 1
- [x] タスク 2

> 引用文ですぜ
> 複数行にまたがる場合、改行のたびにこのキオ号を置く必要があります
> **引用の上下にはリストと同じ空行がないと正しく表示されまあ線。。**
> 引用中の中兄別の Markdown を使用す r ことも可能です。
>
> > これはネストされた引用です
> >
> > > これもネストレされ t 引用よ

---

---

---

---

---

[Quita が開きますぜ](https://qiita.com "QiitaHome")

# [Quita 説明無し](https://qiita.com)

[ここ][satokenai] と [この][satokenai]リンクは同じだぜ　
[satokenai] [sharettle](https://coursepass.sharettle.com)

[satokenai]: https://satokenai.com

![](https://qiita-image-store.s3.amazonaws.com/0/45617/015bd058-7ea0-e6a5-b9cb-36a4fb38e59c.png "Quita")

| Left align | Right align | Center align |
| :--------- | ----------: | :----------: |
| This       |        This |     This     |
| This       |        This |     This     |
| This       |        This |     This     |
| This       |        This |     This     |
| This       |        This |     This     |
| This       |        This |     This     |
| This       |        This |     This     |
| This       |        This |     This     |
| This       |        This |     This     |
| This       |        This |     This     |
| This       |        This |     This     |

<table>
  <caption>HTMLの要素</caption>
  <thead>
    <tr>
      <th>名前</th> <th>説明</th>
    </tr>
  </thead>
  <tr>
    <td> table </td> <td>テーブル</td>
  </tr>
  <tr>
    <td> caption </td> <td>テーブルのキャプション</td>
  </tr>
</table>

```math
\left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
\left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
```

https://qiita.com/Qiita/items/c686397e4a0f4f11683d

```plantuml
Bob->Alice :Hello!
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
