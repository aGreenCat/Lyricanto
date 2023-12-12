// Imports the Google Cloud client library
const {getLshk} = require('cantonese-romanisation');
require('dotenv').config();

const {Translate} = require('@google-cloud/translate').v2;

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);

// Instantiates a client
const translate = new Translate({
  credentials: CREDENTIALS,
  projectId: CREDENTIALS.project_id
});

function getJyutping(text) {
  let fullJp = getLshk(text).filter(elem => elem.length > 0).map(elem => elem[0]);

  return fullJp.join(' ');
}

async function quickStart() {
  // The text to translate
  //const text = '這句話本來是中文，現在翻譯成英文了。';

  const text = '天 想我善良 良善末日 問為何就到 人間 讚頌公道 但惡霸個個 當街舞蹈  是 我期待 人沒仇報 天代追討  活得不好 亦都不倒 誓與壞人們 鬥遲才入土  你話變壞更易 保晚節 難道有用  起碼今晚舒泰的入睡 毋懼打風行雷 和行路會滑倒  全個世界 都有地板 別不小心 望少一眼 若水一灘 分辨到忠奸 為害的 總會有晚踏中 落地像碎蛋   鐘 雖會慢 時辰未到的 終有日還 叫好人們明白到 好人們無力撐 都有業力如大手 在暗中的撐   躲得過隕石 無預兆大病 又能避嗎 如果愛下一代 願報應看中只得你吧 別 恃行運 來日雷劈 穿越天花  什麼的種 什麽的瓜 自作孽回流 你能攔路嗎  聽父母話 宇宙的報應 從未作罷 不要講我知道 黑共白 人類基本定律 原來是個謊話 全個世界 都有地板別不小心 望少一眼若水一灘 分辨到忠奸為害的 總會有晚踏中 落地像碎蛋  鐘 雖會慢時辰未到的 終有日還叫好人們明白到 好人們無力撐天理亦沒法推翻  像這樣咒你 也自嘆太毒太怨太兇猛只盼黑心 可壯膽善良乏力 才讓撒旦 來臨狂瀾用愛無力挽 還要笑嗎 請看地板別不小心 望少一眼滴水梯間 濕滑洗手間為害的 總會有晚踏中 落地像碎蛋 好 好吃飯閻王在轉彎 等你面談你假如仍然未悔陰謀仍然未散祝你盡量長壽些 病夠幾千晚'

  // The target language
  const target = 'en';

  // Translates some text into Russian
  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);
  console.log(`Jyutping: ${getJyutping(text)}`);

  
}

quickStart();