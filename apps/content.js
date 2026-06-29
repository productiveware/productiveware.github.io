// Content for app subpages.
//
// All legal prose is preserved verbatim from the source GitHub Pages — do not
// edit wording without checking the source URL noted on each entry.

window.APP_CONTENT = {
  // ─────────────────────────────────────────────────────────────────
  // 都道府県クイズ (Japanese-only app)
  // ─────────────────────────────────────────────────────────────────
  'katachi-quiz': {
    titleJa: '都道府県クイズ',
    titleEn: 'Prefecture Quiz',
    appStoreId: '6762039667',
    appStoreUrl: 'https://apps.apple.com/us/app/id6762039667',
    accent: '#3aaaff',
    sourceUrl: 'https://productiveware.github.io/katachi-quiz-support/',
    langs: ['ja'],
    defaultLang: 'ja',
    i18n: {
      ja: {
        tagline: '漢字でおぼえる！都道府県シルエット手書き回答アプリ',
        about: {
          heading: 'アプリについて',
          body: [
            '「都道府県クイズ」は、都道府県のシルエットを見て、正式名称を手書き漢字で回答する学習アプリです。',
            '小学4年生〜中学3年生を対象に、地理の学習をサポートします。',
          ],
        },
        support: {
          heading: 'お問い合わせ',
          body: ['バグの報告・ご要望は、以下の GitHub Issues よりお送りください。'],
          cta: { label: 'GitHub Issues を開く', url: 'https://github.com/productiveware/katachi_quiz/issues' },
        },
        privacy: {
          heading: 'プライバシーポリシー',
          effective: '制定日：2026年4月29日',
          sections: [
            { n: '01', title: '収集する情報', body: [
              '本アプリ「都道府県クイズ」は、氏名・メールアドレス・電話番号などの個人を特定できる情報を収集しません。',
              'プレーヤー名はユーザーが任意で入力するもので、デバイス内にのみ保存され、外部に送信されることはありません。',
            ]},
            { n: '02', title: 'ローカル保存データ', body: ['以下のデータはお使いのデバイス内にのみ保存されます。外部サーバーへの送信は行いません。'], list: [
              'クイズの成績（正解数・タイム・プレイ日時）',
              'プレーヤー名（任意入力）',
            ]},
            { n: '03', title: '広告（Google AdMob）', body: [
              '本アプリは Google AdMob を使用して広告を表示しています。',
              '本アプリは一般向けコンテンツとして配信されており、AdMob の標準的なターゲティング機能（行動ターゲティング広告を含む）を使用しています。',
              { html: 'AdMob のプライバシーポリシーについては、<a href="https://policies.google.com/privacy">Google のプライバシーポリシー</a>をご確認ください。' },
            ]},
            { n: '04', title: '手書き認識（Google ML Kit）', body: ['手書き文字の認識には Google ML Kit Digital Ink Recognition を使用しています。認識処理はデバイス上でオフラインで実行され、手書きデータが外部に送信されることはありません。']},
            { n: '05', title: '第三者サービス', list: [
              { html: '<strong>Google AdMob</strong>（広告配信）― <a href="https://policies.google.com/privacy">プライバシーポリシー</a>' },
              { html: '<strong>Google ML Kit</strong>（手書き認識）― <a href="https://developers.google.com/ml-kit/terms">利用規約</a>' },
            ]},
            { n: '06', title: 'お問い合わせ', body: [{ html: 'プライバシーポリシーに関するご質問は、<a href="https://github.com/productiveware/katachi_quiz/issues">GitHub Issues</a> よりお問い合わせください。' }]},
            { n: '07', title: '改定', body: ['本ポリシーは必要に応じて改定することがあります。重要な変更がある場合は、このページにて告知します。']},
          ],
        },
        terms: {
          heading: '利用規約',
          effective: '制定日：2026年4月29日',
          sections: [
            { n: '01', title: '同意', body: ['本アプリ「都道府県クイズ」をご利用になることで、本利用規約に同意したものとみなします。']},
            { n: '02', title: '利用目的', body: ['本アプリは学習を目的としたものです。地理に関する情報の正確性を保証するものではありません。']},
            { n: '03', title: '禁止事項', body: ['ユーザーは以下の行為を行ってはなりません。'], list: [
              '本アプリのリバースエンジニアリング・逆コンパイル・改ざん',
              '本アプリを用いた商業目的での再配布',
              'その他、法令または公序良俗に反する行為',
            ]},
            { n: '04', title: '免責事項', body: [
              '本アプリの利用によって生じた損害について、開発者は一切の責任を負いません。',
              '本アプリは予告なく機能の変更・停止・終了を行う場合があります。',
            ]},
            { n: '05', title: '知的財産権', body: ['本アプリに関する知的財産権はすべて開発者に帰属します。']},
            { n: '06', title: '規約の変更', body: ['本規約は必要に応じて改定することがあります。改定後の規約はこのページにて公開します。']},
            { n: '07', title: '準拠法・管轄', body: ['本規約は日本法に準拠し、日本の裁判所を専属管轄裁判所とします。']},
            { n: '08', title: 'お問い合わせ', body: [{ html: '本規約に関するご質問は、<a href="https://github.com/productiveware/katachi_quiz/issues">GitHub Issues</a> よりお問い合わせください。' }]},
          ],
        },
        credits: {
          heading: 'クレジット',
          sections: [
            { title: '効果音', list: [{ html: '<a href="https://www.springin.org/sound-stock/">Springin\' Sound Stock</a>' }] },
            { title: 'BGM — 甘茶の音楽工房', list: [
              { html: '作曲：甘茶（Amacha）／ <a href="https://amachamusic.chagasi.com/">amachamusic.chagasi.com</a>' },
              { html: '<a href="https://amachamusic.chagasi.com/music_toy.html">Toy</a>' },
              { html: '<a href="https://amachamusic.chagasi.com/music_asayakenomachi.html">朝焼けの街</a>' },
              { html: '<a href="https://amachamusic.chagasi.com/music_hiyokonokakekko.html">ひよこの駆けっこ</a>' },
              { html: '<a href="https://amachamusic.chagasi.com/music_retropark.html">レトロパーク</a>' },
            ]},
            { title: 'BGM — DOVA-SYNDROME', list: [
              { html: '<a href="https://dova-s.jp/">dova-s.jp</a>' },
              '異世界へようこそ（作曲：蒲鉾さちこ）',
              'Happy Island（作曲：FLASH☆BEAT）',
              { html: '<a href="https://dova-s.jp/bgm/detail/23329">Ice float</a>（作曲：Sakuttipanda）' },
              { html: '<a href="https://dova-s.jp/bgm/detail/23290">soft neon</a>（作曲：Kei Morimoto）' },
            ]},
          ],
        },
      },
    },
  },

  // ─────────────────────────────────────────────────────────────────
  // Gout Tracker (multilingual JP/EN; ZH coming soon)
  // ─────────────────────────────────────────────────────────────────
  'gout-tracker': {
    titleJa: 'Gout Tracker',
    titleEn: 'Gout Tracker',
    appStoreId: '6756119584',
    appStoreUrl: 'https://apps.apple.com/us/app/id6756119584',
    accent: '#3aaaff',
    sourceUrl: 'https://productiveware.github.io/Goutracker-support/',
    langs: ['ja', 'en', 'zh'],
    defaultLang: 'ja',
    i18n: {
      ja: {
        tagline: '痛風管理のための健康トラッキングアプリ',
        about: {
          heading: 'アプリについて',
          body: [
            'Gout Tracker は、痛風管理のためのヘルストラッキングアプリです。水分摂取の記録、服薬管理、通知リマインダーを通じて、毎日の健康管理をサポートします。',
            'データはすべてご自身の端末内に AES 暗号化で保存され、サーバーへ送信されることはありません。',
          ],
          features: [
            '水分摂取記録',
            '服薬管理',
            '通知リマインダー',
            '多言語対応（日本語・英語・中国語）',
            'ローカル暗号化保存',
          ],
        },
        support: {
          heading: 'サポート',
          intro: ['不具合のご報告・機能のご要望は、以下の GitHub Issues よりお送りください。'],
          cta: { label: 'GitHub Issues を開く', url: 'https://github.com/productiveware/Goutracker-support/issues' },
          faqs: [
            { q: 'データは安全ですか？', a: 'はい。すべてのデータはお客様のデバイス内に AES 暗号化されて保存されます。クラウドに送信されることはありません。' },
            { q: 'トライアル期間後はどうなりますか？', a: '7日間の無料トライアル終了後、通知機能が無効になりますが、水分摂取と服薬の記録は引き続き利用できます。' },
            { q: '購入を復元するには？', a: 'サブスクリプション画面で「購入を復元」ボタンをタップしてください。同じ Apple ID または Google アカウントでサインインしている必要があります。' },
            { q: 'データをバックアップできますか？', a: '現在、データはローカルに保存されます。デバイスのバックアップ機能（iCloud、Google Drive 等）を使用してデバイス全体をバックアップすることをお勧めします。' },
            { q: '他の言語に切り替えるには？', a: '設定画面から「言語」を選択し、お好みの言語を選択してください。日本語、英語、中国語に対応しています。' },
          ],
          version: { label: 'バージョン', value: '1.0.0', updated: '2026-01-03', platforms: 'iOS, Android' },
        },
        privacy: {
          heading: 'プライバシーポリシー',
          effective: '最終更新日：2026年1月3日',
          sections: [
            { n: '01', title: 'はじめに', body: ['Gout Tracker（以下「本アプリ」）をご利用いただきありがとうございます。本アプリは、痛風管理のための健康トラッキングアプリケーションです。本プライバシーポリシーは、本アプリがどのようにお客様の情報を取り扱うかについて説明します。']},
            { n: '02', title: '運営者情報', body: ['本アプリは個人開発者により提供されています。']},
            { n: '03', title: '収集する情報', body: ['本アプリは以下の情報をお客様のデバイス内にのみ保存します：'], list: [
              { html: '<strong>水分摂取記録</strong>：摂取量、日時、メモ' },
              { html: '<strong>服薬記録</strong>：薬剤名、用量、服用時刻、頻度、メモ' },
              { html: '<strong>アプリ設定</strong>：言語設定、通知設定、目標値' },
              { html: '<strong>サブスクリプション状態</strong>：トライアル開始日、プレミアム購入状態' },
            ]},
            { n: '04', title: '収集しない情報', body: ['本アプリは以下の情報を収集しません：'], list: [
              '個人を特定できる情報（氏名、住所、電話番号、メールアドレス等）',
              '位置情報',
              'デバイス識別子',
              '使用状況の分析データ',
            ]},
            { n: '05', title: '情報の利用目的', body: ['収集した情報は以下の目的でのみ使用されます：'], list: [
              '水分摂取量と服薬の記録・管理',
              '通知リマインダーの提供',
              'アプリの設定保持',
              'サブスクリプション機能の提供',
            ]},
            { n: '06', title: 'データの保存と保護', body: [
              'すべてのデータはお客様のデバイス内にのみ保存されます。本アプリはクラウド同期機能を持たないため、データが外部サーバーに送信されることはありません。',
              'お客様のデータは以下の方法で保護されています：',
            ], list: [
              { html: '<strong>AES 暗号化</strong>：Hive データベースを使用し、すべてのローカルデータを AES 暗号化' },
              { html: '<strong>セキュアストレージ</strong>：暗号化キーは Flutter Secure Storage を使用して安全に保存' },
            ]},
            { n: '07', title: '第三者への情報提供', body: ['本アプリは、お客様のデータを第三者と共有することはありません。すべてのデータはお客様のデバイス内にのみ保存されます。']},
            { n: '08', title: 'サブスクリプションと課金情報', body: ['7日間無料トライアル：'], list: [
              '新規ユーザーには7日間の無料トライアル期間が提供されます',
              'トライアル期間中はすべての機能が利用可能です',
              'トライアル期間終了後、通知機能が無効化されます（記録機能は継続利用可能）',
            ]},
            { n: '09', title: 'プレミアムサブスクリプション', list: [
              'プレミアムサブスクリプションにより、通知機能を含むすべての機能が利用可能になります',
              '課金処理は Apple App Store または Google Play Store を通じて行われます',
              '本アプリは課金情報（クレジットカード番号等）にアクセスすることはありません',
              '購入の復元機能により、再インストール時に購入状態を復元できます',
            ]},
            { n: '10', title: 'お客様の権利', body: ['データの削除：'], list: [
              'アプリをアンインストールすることで、すべてのローカルデータが削除されます',
              'アプリ内からも個別にデータを削除できます',
              'すべてのデータはお客様のデバイス内に保存されており、いつでもアクセス・確認できます',
            ]},
            { n: '11', title: '通知機能', body: ['本アプリは以下の通知機能を提供します：'], list: [
              { html: '<strong>ローカル通知</strong>：水分摂取リマインダー、服薬リマインダー' },
              '通知設定はアプリ内で管理できます',
              '通知機能はプレミアムサブスクリプションまたはトライアル期間中のみ利用可能です',
            ]},
            { n: '12', title: '子供のプライバシー', body: ['本アプリは13歳未満の子供を対象としていません。13歳未満の子供から意図的に個人情報を収集することはありません。']},
            { n: '13', title: 'プライバシーポリシーの変更', body: ['本プライバシーポリシーは必要に応じて更新される場合があります。重要な変更がある場合は、アプリ内で通知します。']},
            { n: '14', title: 'お問い合わせ', body: [{ html: '本プライバシーポリシーに関するご質問は、<a href="https://github.com/productiveware/Goutracker-support/issues">GitHub Issues</a> よりお問い合わせください。' }]},
          ],
        },
        terms: {
          heading: '利用規約',
          effective: '最終更新日：2026年1月3日',
          sections: [
            { n: '01', title: 'はじめに', body: ['本利用規約（以下「本規約」）は、Gout Tracker（以下「本アプリ」）の利用条件を定めるものです。本アプリを利用することにより、お客様は本規約に同意したものとみなされます。']},
            { n: '02', title: 'サービスの概要', body: ['本アプリは、痛風管理のための健康トラッキングアプリケーションです。以下の機能を提供します：'], list: [
              '水分摂取量の記録と管理', '服薬スケジュールの管理', '通知リマインダー機能', '多言語対応（日本語、英語、中国語）',
            ]},
            { n: '03', title: '利用資格', body: ['本アプリは13歳以上の方を対象としています。13歳未満の方は本アプリを利用できません。お客様は以下の条件を満たす必要があります：'], list: [
              '本規約およびプライバシーポリシーに同意すること', '正確な情報を入力すること', '本アプリを違法な目的で使用しないこと',
            ]},
            { n: '04', title: 'アカウントと責任', body: ['データ管理：'], list: [
              'すべてのデータはお客様のデバイス内にローカル保存されます',
              'データのバックアップはお客様の責任で行ってください',
              'デバイスの紛失、故障、アプリの削除等によるデータ損失について、当方は一切責任を負いません',
              'お客様は自身のデバイスのセキュリティを適切に管理する責任があります',
              'デバイスの紛失や盗難の場合、速やかに適切な措置を講じてください',
            ]},
            { n: '05', title: 'サブスクリプションと課金', body: ['7日間無料トライアル：'], list: [
              '新規ユーザーには7日間の無料トライアル期間が提供されます',
              'トライアル期間中はすべての機能が利用可能です',
              'トライアル期間終了後、自動的に通知機能が無効化されます',
              'トライアル期間中に解約しても、課金は発生しません',
            ]},
            { n: '06', title: 'プレミアムサブスクリプション', list: [
              'プレミアムサブスクリプションの購入により、通知機能を含むすべての機能が利用可能になります',
              '課金は買い切り型です（継続課金ではありません）',
              '購入の処理は Apple App Store または Google Play Store の規約に従います',
              '購入後の返金については、各ストアの返金ポリシーに従います',
              '再インストール時には、「購入を復元」機能を使用して購入状態を復元できます',
              '購入の復元には追加料金は発生しません',
            ]},
            { n: '07', title: '禁止事項', body: ['お客様は以下の行為を行ってはなりません：'], list: [
              '本アプリを違法な目的で使用すること',
              '本アプリのリバースエンジニアリング、逆コンパイル、逆アセンブルを行うこと',
              '本アプリのセキュリティを侵害する行為',
              '他のユーザーや第三者の権利を侵害する行為',
              '本アプリの運営を妨害する行為',
            ]},
            { n: '08', title: '知的財産権', body: [
              '本アプリおよびそのすべてのコンテンツ（テキスト、グラフィック、ロゴ、アイコン、画像、コード等）の知的財産権は、開発者に帰属します。',
              'お客様には、本規約に従って本アプリを個人的、非商業的目的で使用する、非独占的、譲渡不可能なライセンスが付与されます。',
            ]},
            { n: '09', title: '免責事項', body: ['サービスの提供：'], list: [
              '本アプリは「現状有姿」で提供されます',
              '本アプリが中断なく、エラーなく動作することを保証するものではありません',
              '本アプリは医療アドバイスを提供するものではありません',
              '本アプリは健康管理のサポートツールであり、医療行為の代替となるものではありません',
              '健康に関する重要な決定を行う前には、必ず医療専門家にご相談ください',
              '本アプリの情報に基づいて行われた医療上の決定について、当方は一切責任を負いません',
              'デバイスの故障、アプリの不具合、アンインストール等によるデータ損失について、当方は一切責任を負いません',
              'データのバックアップはお客様の責任で行ってください',
            ]},
            { n: '10', title: '責任の制限', body: ['法律で認められる最大限の範囲において：'], list: [
              '本アプリの使用または使用不能によって生じた直接的、間接的、偶発的、特別、結果的損害について、当方は一切責任を負いません',
              '本アプリの使用により生じた健康上の問題について、当方は一切責任を負いません',
            ]},
            { n: '11', title: 'サービスの変更と終了', body: [
              '当方は、事前の通知なく本アプリの機能を変更、追加、削除する権利を有します。',
              '当方は、事前の通知により本アプリのサービスを終了する権利を有します。サービス終了に伴う損害について、当方は一切責任を負いません。',
            ]},
            { n: '12', title: '利用規約の変更', body: ['当方は、必要に応じて本規約を変更する権利を有します。重要な変更がある場合は、アプリ内で通知します。変更後も本アプリを継続して使用する場合、変更後の規約に同意したものとみなされます。']},
            { n: '13', title: '準拠法と管轄', body: ['本規約は日本法に準拠し、解釈されます。本アプリに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。']},
            { n: '14', title: 'お問い合わせ', body: [{ html: '本規約に関するご質問は、<a href="https://github.com/productiveware/Goutracker-support/issues">GitHub Issues</a> よりお問い合わせください。' }]},
          ],
        },
      },

      en: {
        tagline: 'A health tracking app for managing gout.',
        about: {
          heading: 'About',
          body: [
            'Gout Tracker is a quiet companion for living with gout — hydration logging, medication tracking, and reminder notifications, all in one place.',
            'Every record stays on your device, encrypted with AES. Nothing is sent to a server.',
          ],
          features: [
            'Water intake tracking',
            'Medication management',
            'Notification reminders',
            'Multi-language (Japanese, English, Chinese)',
            'Local encrypted storage',
          ],
        },
        support: {
          heading: 'Support',
          intro: ['Please send bug reports and feature requests through GitHub Issues.'],
          cta: { label: 'Open GitHub Issues', url: 'https://github.com/productiveware/Goutracker-support/issues' },
          faqs: [
            { q: 'Is my data safe?', a: 'Yes. All data is stored locally on your device with AES encryption. It is never transmitted to the cloud.' },
            { q: 'What happens after the trial?', a: 'After the 7-day free trial, notification features will be disabled, but you can continue to record water intake and medication.' },
            { q: 'How to restore purchases?', a: 'Tap the "Restore Purchase" button on the Subscription screen. You must be signed in with the same Apple ID or Google account.' },
            { q: 'Can I backup my data?', a: 'Currently, data is stored locally. We recommend backing up your entire device using device backup features (iCloud, Google Drive, etc.).' },
            { q: 'How to change language?', a: 'Go to Settings, select "Language", and choose your preferred language. Japanese, English, and Chinese are supported.' },
          ],
          version: { label: 'Version', value: '1.0.0', updated: '2026-01-03', platforms: 'iOS, Android' },
        },
        privacy: {
          heading: 'Privacy Policy',
          effective: 'Last Updated: January 3, 2026',
          note: 'This is a translation of the original Japanese Privacy Policy. In case of any discrepancy between the Japanese version and this translation, the Japanese version shall prevail.',
          sections: [
            { n: '01', title: 'Introduction', body: ['Thank you for using Gout Tracker (hereinafter "the App"). This App is a health tracking application for gout management. This Privacy Policy explains how the App handles your information.']},
            { n: '02', title: 'Developer Information', body: ['This App is provided by an individual developer.']},
            { n: '03', title: 'Information We Collect', body: ['The App stores the following information only on your device:'], list: [
              { html: '<strong>Water Intake Records</strong>: Amount, date/time, notes' },
              { html: '<strong>Medication Records</strong>: Medication name, dosage, time, frequency, notes' },
              { html: '<strong>App Settings</strong>: Language settings, notification settings, goal values' },
              { html: '<strong>Subscription Status</strong>: Trial start date, premium purchase status' },
            ]},
            { n: '04', title: 'Information We Do Not Collect', body: ['The App does not collect the following information:'], list: [
              'Personally identifiable information (name, address, phone number, email address, etc.)',
              'Location information', 'Device identifiers', 'Usage analytics data',
            ]},
            { n: '05', title: 'Purpose of Information Use', body: ['Collected information is used only for the following purposes:'], list: [
              'Recording and managing water intake and medication',
              'Providing notification reminders',
              'Maintaining app settings',
              'Providing subscription features',
            ]},
            { n: '06', title: 'Data Storage and Protection', body: [
              'All data is stored only on your device. The App does not have cloud synchronization features, so data is never transmitted to external servers.',
              'Your data is protected using the following methods:',
            ], list: [
              { html: '<strong>AES Encryption</strong>: All local data is encrypted using the Hive database with AES encryption' },
              { html: '<strong>Secure Storage</strong>: Encryption keys are securely stored using Flutter Secure Storage' },
            ]},
            { n: '07', title: 'Third-Party Information Sharing', body: ['The App does not share your data with third parties. All data is stored only on your device.']},
            { n: '08', title: 'Subscription and Billing Information', body: ['7-Day Free Trial:'], list: [
              'New users are provided with a 7-day free trial period',
              'All features are available during the trial period',
              'After the trial period ends, notification features will be disabled (recording features remain available)',
            ]},
            { n: '09', title: 'Premium Subscription', list: [
              'Premium subscription unlocks all features including notifications',
              'Billing is processed through Apple App Store or Google Play Store',
              'The App does not access billing information (credit card numbers, etc.)',
              'Restore purchase feature allows you to restore your purchase status after reinstallation',
            ]},
            { n: '10', title: 'Your Rights', body: ['Data deletion:'], list: [
              'Uninstalling the app will delete all local data',
              'You can also delete individual data from within the app',
              'All data is stored on your device and can be accessed and reviewed at any time',
            ]},
            { n: '11', title: 'Notification Features', body: ['The App provides the following notification features:'], list: [
              { html: '<strong>Local Notifications</strong>: Water intake reminders, medication reminders' },
              'Notification settings can be managed within the app',
              'Notification features are only available during premium subscription or trial period',
            ]},
            { n: '12', title: "Children's Privacy", body: ['This App is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.']},
            { n: '13', title: 'Changes to Privacy Policy', body: ['This Privacy Policy may be updated as necessary. If there are significant changes, we will notify you within the app.']},
            { n: '14', title: 'Contact Us', body: [{ html: 'If you have any questions or comments about this Privacy Policy, please contact us through <a href="https://github.com/productiveware/Goutracker-support/issues">GitHub Issues</a>.' }]},
          ],
        },
        terms: {
          heading: 'Terms of Service',
          effective: 'Last Updated: January 3, 2026',
          note: 'This is a translation of the original Japanese Terms of Service. In case of any discrepancy between the Japanese version and this translation, the Japanese version shall prevail.',
          sections: [
            { n: '01', title: 'Introduction', body: ['These Terms of Service (hereinafter "Terms") define the conditions for using Gout Tracker (hereinafter "the App"). By using the App, you agree to these Terms.']},
            { n: '02', title: 'Service Overview', body: ['The App is a health tracking application for gout management. It provides the following features:'], list: [
              'Water intake recording and management', 'Medication schedule management', 'Notification reminder features', 'Multi-language support (Japanese, English, Chinese)',
            ]},
            { n: '03', title: 'Eligibility', body: ['The App is intended for users aged 13 and above. Users under 13 years of age may not use the App. You must meet the following conditions:'], list: [
              'Agree to these Terms and the Privacy Policy',
              'Enter accurate information',
              'Not use the App for illegal purposes',
            ]},
            { n: '04', title: 'Account and Responsibility', body: ['Data management:'], list: [
              'All data is stored locally on your device',
              'You are responsible for backing up your data',
              'We are not liable for any data loss due to device loss, malfunction, app deletion, etc.',
              'You are responsible for properly managing the security of your device',
              'In case of device loss or theft, take appropriate measures immediately',
            ]},
            { n: '05', title: 'Subscription and Billing', body: ['7-Day Free Trial:'], list: [
              'New users are provided with a 7-day free trial period',
              'All features are available during the trial period',
              'Notification features will be automatically disabled after the trial period ends',
              'No charges will be incurred if you cancel during the trial period',
            ]},
            { n: '06', title: 'Premium Subscription', list: [
              'Purchasing a premium subscription unlocks all features including notifications',
              'Billing is one-time purchase (not recurring subscription)',
              'Purchases are processed according to Apple App Store or Google Play Store terms',
              'Refunds after purchase are subject to each store\'s refund policy',
              'You can restore your purchase status using the "Restore Purchase" feature after reinstallation',
              'No additional charges apply for restoring purchases',
            ]},
            { n: '07', title: 'Prohibited Activities', body: ['You may not:'], list: [
              'Use the App for illegal purposes',
              'Reverse engineer, decompile, or disassemble the App',
              "Engage in activities that compromise the App's security",
              'Infringe upon the rights of other users or third parties',
              'Interfere with the operation of the App',
            ]},
            { n: '08', title: 'Intellectual Property Rights', body: [
              'All intellectual property rights in the App and all its content (text, graphics, logos, icons, images, code, etc.) belong to the developer.',
              'You are granted a non-exclusive, non-transferable license to use the App for personal, non-commercial purposes in accordance with these Terms.',
            ]},
            { n: '09', title: 'Disclaimers', body: ['Service provision:'], list: [
              'The App is provided "as is"',
              'We do not guarantee that the App will operate without interruption or errors',
              'The App does not provide medical advice',
              'The App is a health management support tool and is not a substitute for medical care',
              'Always consult with medical professionals before making important health decisions',
              'We are not liable for medical decisions made based on information from the App',
              'We are not liable for data loss due to device malfunction, app bugs, uninstallation, etc.',
              'You are responsible for backing up your data',
            ]},
            { n: '10', title: 'Limitation of Liability', body: ['To the maximum extent permitted by law:'], list: [
              'We are not liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the App',
              'We are not liable for any health issues arising from the use of the App',
            ]},
            { n: '11', title: 'Service Changes and Termination', body: [
              'We reserve the right to modify, add, or remove features of the App without prior notice.',
              "We reserve the right to terminate the App's service with prior notice. We are not liable for any damages resulting from service termination.",
            ]},
            { n: '12', title: 'Changes to Terms of Service', body: ['We reserve the right to modify these Terms as necessary. If there are significant changes, we will notify you within the App. Continued use of the App after changes constitutes acceptance of the modified Terms.']},
            { n: '13', title: 'Governing Law and Jurisdiction', body: ['These Terms shall be governed by and construed in accordance with the laws of Japan. Any disputes relating to the App shall be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance.']},
            { n: '14', title: 'Contact Us', body: [{ html: 'If you have any questions or comments about these Terms, please contact us through <a href="https://github.com/productiveware/Goutracker-support/issues">GitHub Issues</a>.' }]},
          ],
        },
      },

      zh: {
        tagline: '用于痛风管理的健康追踪应用程序。',
        about: {
          heading: '关于',
          body: [
            '痛风追踪器是一款专为痛风管理设计的健康追踪应用。通过饮水记录、用药管理和通知提醒，帮助您每天进行健康管理。',
            '所有数据均以 AES 加密方式存储在您的设备上，不会传输到服务器。',
          ],
          features: [
            '饮水记录',
            '用药管理',
            '通知提醒',
            '多语言支持（日语、英语、中文）',
            '本地加密存储',
          ],
        },
        support: {
          heading: '支持',
          intro: ['请通过 GitHub Issues 提交错误报告和功能请求。'],
          cta: { label: '打开 GitHub Issues', url: 'https://github.com/productiveware/Goutracker-support/issues' },
          faqs: [
            { q: '我的数据安全吗？', a: '是的。所有数据都以 AES 加密方式存储在您的设备上。不会传输到云端。' },
            { q: '试用期结束后会怎样？', a: '7 天免费试用期结束后，通知功能将被禁用，但您仍可继续记录饮水和用药。' },
            { q: '如何恢复购买？', a: '在订阅页面点击"恢复购买"按钮。您必须使用相同的 Apple ID 或 Google 账户登录。' },
            { q: '可以备份数据吗？', a: '目前数据存储在本地。我们建议使用设备备份功能（iCloud、Google Drive 等）备份整个设备。' },
            { q: '如何更改语言？', a: '进入设置，选择"语言"，然后选择您喜欢的语言。支持日语、英语和中文。' },
          ],
          version: { label: '版本', value: '1.0.0', updated: '2026-01-03', platforms: 'iOS, Android' },
        },
        privacy: {
          heading: '隐私政策',
          effective: '最后更新日期：2026年1月3日',
          note: '本文档为日文原版隐私政策的翻译版本。如日文版本与本翻译版本之间存在任何差异，以日文版本为准。',
          sections: [
            { n: '01', title: '简介', body: ['感谢您使用痛风追踪器（以下简称"本应用"）。本应用是一款用于痛风管理的健康追踪应用程序。本隐私政策说明了本应用如何处理您的信息。']},
            { n: '02', title: '开发者信息', body: ['本应用由个人开发者提供。']},
            { n: '03', title: '我们收集的信息', body: ['本应用仅在您的设备内存储以下信息：'], list: [
              { html: '<strong>饮水记录</strong>：摄入量、日期/时间、备注' },
              { html: '<strong>用药记录</strong>：药物名称、剂量、时间、频率、备注' },
              { html: '<strong>应用设置</strong>：语言设置、通知设置、目标值' },
              { html: '<strong>订阅状态</strong>：试用开始日期、高级版购买状态' },
            ]},
            { n: '04', title: '我们不收集的信息', body: ['本应用不收集以下信息：'], list: [
              '个人身份信息（姓名、地址、电话号码、电子邮箱等）',
              '位置信息', '设备标识符', '使用情况分析数据',
            ]},
            { n: '05', title: '信息使用目的', body: ['收集的信息仅用于以下目的：'], list: [
              '记录和管理饮水和用药',
              '提供通知提醒',
              '保存应用设置',
              '提供订阅功能',
            ]},
            { n: '06', title: '数据存储和保护', body: [
              '所有数据仅存储在您的设备内。本应用不具有云同步功能，因此数据不会传输到外部服务器。',
              '您的数据通过以下方法受到保护：',
            ], list: [
              { html: '<strong>AES 加密</strong>：使用 Hive 数据库对所有本地数据进行 AES 加密' },
              { html: '<strong>安全存储</strong>：使用 Flutter Secure Storage 安全存储加密密钥' },
            ]},
            { n: '07', title: '第三方信息共享', body: ['本应用不会与第三方共享您的数据。所有数据仅存储在您的设备内。']},
            { n: '08', title: '订阅和计费信息', body: ['7 天免费试用：'], list: [
              '新用户可获得 7 天免费试用期',
              '试用期内所有功能均可使用',
              '试用期结束后，通知功能将被禁用（记录功能仍可继续使用）',
            ]},
            { n: '09', title: '高级版订阅', list: [
              '高级版订阅可解锁包括通知在内的所有功能',
              '计费通过 Apple App Store 或 Google Play Store 处理',
              '本应用不会访问计费信息（信用卡号等）',
              '恢复购买功能允许您在重新安装后恢复购买状态',
            ]},
            { n: '10', title: '您的权利', body: ['数据删除：'], list: [
              '卸载应用将删除所有本地数据',
              '您也可以在应用内删除单个数据',
              '所有数据都存储在您的设备上，您可以随时访问和查看',
            ]},
            { n: '11', title: '通知功能', body: ['本应用提供以下通知功能：'], list: [
              { html: '<strong>本地通知</strong>：饮水提醒、用药提醒' },
              '通知设置可在应用内管理',
              '通知功能仅在高级版订阅或试用期内可用',
            ]},
            { n: '12', title: '儿童隐私', body: ['本应用不适用于 13 岁以下的儿童。我们不会有意收集 13 岁以下儿童的个人信息。']},
            { n: '13', title: '隐私政策变更', body: ['本隐私政策可能会根据需要进行更新。如有重大变更，我们将在应用内通知您。']},
            { n: '14', title: '联系我们', body: [{ html: '如果您对本隐私政策有任何疑问或意见，请通过 <a href="https://github.com/productiveware/Goutracker-support/issues">GitHub Issues</a> 与我们联系。' }]},
          ],
        },
        terms: {
          heading: '服务条款',
          effective: '最后更新日期：2026年1月3日',
          note: '本文档为日文原版服务条款的翻译版本。如日文版本与本翻译版本之间存在任何差异，以日文版本为准。',
          sections: [
            { n: '01', title: '简介', body: ['本服务条款（以下简称"本条款"）规定了使用痛风追踪器（以下简称"本应用"）的条件。使用本应用即表示您同意本条款。']},
            { n: '02', title: '服务概述', body: ['本应用是一款用于痛风管理的健康追踪应用程序。提供以下功能：'], list: [
              '饮水量记录和管理', '用药计划管理', '通知提醒功能', '多语言支持（日语、英语、中文）',
            ]},
            { n: '03', title: '使用资格', body: ['本应用面向 13 岁及以上用户。13 岁以下用户不得使用本应用。您必须满足以下条件：'], list: [
              '同意本条款和隐私政策', '输入准确信息', '不将本应用用于非法目的',
            ]},
            { n: '04', title: '账户和责任', body: ['数据管理：'], list: [
              '所有数据都本地存储在您的设备上',
              '您有责任备份您的数据',
              '对于因设备丢失、故障、应用删除等导致的数据丢失，我们不承担任何责任',
              '您有责任妥善管理设备的安全',
              '如果设备丢失或被盗，请立即采取适当措施',
            ]},
            { n: '05', title: '订阅和计费', body: ['7 天免费试用：'], list: [
              '新用户可获得 7 天免费试用期',
              '试用期内所有功能均可使用',
              '试用期结束后，通知功能将自动禁用',
              '试用期内取消不会产生任何费用',
            ]},
            { n: '06', title: '高级版订阅', list: [
              '购买高级版订阅可解锁包括通知在内的所有功能',
              '计费为一次性购买（非循环订阅）',
              '购买按照 Apple App Store 或 Google Play Store 的条款处理',
              '购买后的退款遵循各商店的退款政策',
              '重新安装后可使用"恢复购买"功能恢复购买状态',
              '恢复购买不产生额外费用',
            ]},
            { n: '07', title: '禁止行为', body: ['您不得：'], list: [
              '将本应用用于非法目的',
              '对本应用进行逆向工程、反编译或反汇编',
              '从事损害本应用安全的活动',
              '侵犯其他用户或第三方的权利',
              '干扰本应用的运营',
            ]},
            { n: '08', title: '知识产权', body: [
              '本应用及其所有内容（文本、图形、徽标、图标、图像、代码等）的知识产权归开发者所有。',
              '您获得了根据本条款将本应用用于个人、非商业目的的非独占、不可转让的许可。',
            ]},
            { n: '09', title: '免责声明', body: ['服务提供：'], list: [
              '本应用按"现状"提供',
              '我们不保证本应用将不间断、无错误地运行',
              '本应用不提供医疗建议',
              '本应用是健康管理支持工具，不能替代医疗护理',
              '在做出重要健康决定之前，请务必咨询医疗专业人员',
              '对于基于本应用信息做出的医疗决定，我们不承担任何责任',
              '对于因设备故障、应用程序错误、卸载等导致的数据丢失，我们不承担任何责任',
              '您有责任备份您的数据',
            ]},
            { n: '10', title: '责任限制', body: ['在法律允许的最大范围内：'], list: [
              '对于因使用或无法使用本应用而产生的任何直接、间接、偶然、特殊或后果性损害，我们不承担任何责任',
              '对于因使用本应用而产生的任何健康问题，我们不承担任何责任',
            ]},
            { n: '11', title: '服务变更和终止', body: [
              '我们保留在不事先通知的情况下修改、添加或删除本应用功能的权利。',
              '我们保留在事先通知的情况下终止本应用服务的权利。对于服务终止导致的任何损害，我们不承担任何责任。',
            ]},
            { n: '12', title: '服务条款变更', body: ['我们保留根据需要修改本条款的权利。如有重大变更，我们将在应用内通知您。变更后继续使用本应用即表示接受修改后的条款。']},
            { n: '13', title: '适用法律和管辖', body: ['本条款应根据日本法律进行解释和适用。有关本应用的任何争议应由东京地方法院作为第一审法院专属管辖。']},
            { n: '14', title: '联系我们', body: [{ html: '如果您对本条款有任何疑问或意见，请通过 <a href="https://github.com/productiveware/Goutracker-support/issues">GitHub Issues</a> 与我们联系。' }]},
          ],
        },
      },
    },
  },
};

window.UI_STRINGS = {
  ja: {
    nav_apps: 'すべてのアプリ',
    nav_appstore: 'App Store',
    open_appstore: 'App Store で開く',
    section_about: 'アプリについて',
    section_support: 'サポート',
    section_privacy: 'プライバシー',
    section_terms: '利用規約',
    section_credits: 'クレジット',
    section_features: '機能',
    section_faq: 'よくある質問',
    back: 'ylab に戻る',
    features_label: 'FEATURES',
    sourceLabel: '原文',
    versionInfo: 'バージョン情報',
    platforms: 'プラットフォーム',
    updated: '最終更新',
  },
  en: {
    nav_apps: 'All apps',
    nav_appstore: 'App Store',
    open_appstore: 'Open in App Store',
    section_about: 'About',
    section_support: 'Support',
    section_privacy: 'Privacy',
    section_terms: 'Terms',
    section_credits: 'Credits',
    section_features: 'Features',
    section_faq: 'FAQ',
    back: 'Back to ylab',
    features_label: 'FEATURES',
    sourceLabel: 'Source',
    versionInfo: 'Version info',
    platforms: 'Platforms',
    updated: 'Last updated',
  },
  zh: {
    nav_apps: '所有应用',
    nav_appstore: 'App Store',
    open_appstore: '在 App Store 中打开',
    section_about: '关于',
    section_support: '支持',
    section_privacy: '隐私',
    section_terms: '条款',
    section_credits: '鸣谢',
    section_features: '功能',
    section_faq: '常见问题',
    back: '返回 ylab',
    features_label: '功能',
    sourceLabel: '原文',
    versionInfo: '版本信息',
    platforms: '平台',
    updated: '最后更新',
  },
};
