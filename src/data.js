import { v4 as uuid4 } from "uuid";

const songs = [
  {
    id: uuid4(),
    title: "浪子心声",
    artist: "许冠杰",
    cover: "https://img1.kuwo.cn/star/albumcover/500/50/43/4292253516.jpg",
    audio:
      "https://other-web-ri01-sycdn.kuwo.cn/6d07f6e0eaa104def5a70d8ff203913c/61af9983/resource/n1/34/46/46678786.mp3",
  },
  {
    id: uuid4(),
    title: "爱一个人好难",
    artist: "苏永康",
    cover: "https://img1.kuwo.cn/star/albumcover/500/26/84/1056795808.jpg",
    audio:
      "https://other-web-nf01-sycdn.kuwo.cn/af7e68509d1da9758d63268cfd5f8e15/61af9a70/resource/n1/43/4/3767307403.mp3",
  },
  {
    id: uuid4(),
    title: "想把我唱给你听",
    artist: "老狼",
    cover: "https://img2.kuwo.cn/star/albumcover/500/64/32/2376844142.jpg",
    audio:
      "https://cn-sycdn.kuwo.cn/ce0d78ba5de55147609f808788419e4d/61af6175/resource/n3/39/29/253327129.mp3",
  },
  {
    id: uuid4(),
    title: "不必在乎我是谁",
    artist: "林忆莲",
    cover: "https://img4.kuwo.cn/star/albumcover/500/8/79/3888291028.jpg",
    audio:
      "https://sr-sycdn.kuwo.cn/79ded277bdc8ee62105025f264f3fb3a/61af61e1/resource/n2/88/62/3479218092.mp3",
  },
  /*
  {
    id: uuid4(),
    title: "",
    artist: "",
    cover: "",
    audio:
      "",
  },
  */
];

export default songs;
