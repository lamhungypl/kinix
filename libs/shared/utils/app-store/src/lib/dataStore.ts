export const dataStore = {
  mobile: {
    common: {
      userInfo: {
        birthday: null,
        country: null,
        account_type: 'phone',
        is_phone_verified: true,
        unread_notification_count: 7,
        gender: null,
        bookcare_amount: 0,
        is_email_verified: false,
        real_name: null,
        is_support_subscription: false,
        reward_point: 0,
        has_totp: null,
        id: 8731995,
        email: '',
        has_password: true,
        is_tikier: false,
        is_new: false,
        recurring_orders_count: 0,
        raw_email: '8288452756294190979-zalo@tiki.com.vn',
        email_valid: '',
        tikinow_info: {
          is_support_free_trial: false,
          text: 'Thông tin Gói hội viên',
          url: 'https://tiki.vn/customer/tikinow',
        },
        avatar_url:
          'https://salt.tikicdn.com/cache/512x512/ts/avatar/09/0e/6f/2cdeb73c50ee24730a4647ca34802b8a.jpg',
        nationality: null,
        active_orders: 0,
        group_id: 8,
        name: 'Lâm Hùng',
        updatable: [
          'full_name',
          'gender',
          'birthday',
          'nationality',
          'real_name',
          'username',
          'email',
        ],
        phone_number: '0382463233',
        created_date: 1541161154,
        ekyc_level: null,
        cart_item_count: 0,
        has_pin: null,
        username: null,
        supported_payment_card_groups: 'normal,billing,installment',
      },
      drawerOpen: false,
      isImportDrawer: false,
      cartsMineInfo: {} as any,
      isWebview: false,
      logPageView: false,
      toast: {
        isShow: false,
        content: '',
        type: '',
      },
      isPWAInstalled: false,
      webConfig: {
        desktopWeb: {
          dummyData:
            'okokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokok123',
          reward_revamp: 'tikier',
          tkngon_age_confirm_session_duration_interval_second: 1800000,
          disableGTM: true,
          chatBotEnable: true,
          showCouponCode: true,
          myAccountShowCouponCode: true,
          showExternalSellerPrice: false,
          showExternalPrices: false,
          exp_browse_external_price_clickable: false,
          loginV2Enable: true,
          impressionEnable: true,
          newPersonalizeAPI: true,
          allowComboWidget: true,
          serviceWorker: {
            enable: true,
            enableTrackity: true,
          },
          pdp_quantity_sold: 'new',
          freeship_home_header: {
            image_url:
              'https://salt.tikicdn.com/ts/brickv2og/70/07/62/9a90de2324bda05df7ff137972de1c70.png',
            url: 'https://tiki.vn/sep/my-sep',
            width: 129,
            height: 18,
          },
          popupManager: {
            home: {
              maxPerDay: 4,
              maxPerPageLoad: 1,
              autoClose: true,
              autoCloseTimeout: 10000,
              activeTimeout: 3000,
              usingAnimation: false,
              gapTime: 3000,
            },
          },
          shareToEarn: {
            popup_background_color: '#856EFA',
            popup_header_image_url:
              'https://salt.tikicdn.com/ts/upload/28/74/b6/fc33902e7c90a643705c2a6b1a31d2bf.png',
            popular_apps: [
              {
                icon: 'https://salt.tikicdn.com/ts/upload/7b/06/71/32738d3827021cc973aac49d53945160.png',
                title: 'FaceBook',
                package_name: 'com.facebook.katana',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/e6/fb/b4/31e2d7b0fed5775c999dfb5e5bc0ab38.png',
                title: 'Messenger',
                package_name: 'com.facebook.orca',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/36/98/59/a3e7abb1fa23676ab93cc15cae5e1b8a.png',
                title: 'Telegram',
                package_name: 'org.telegram.messenger',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/cc/fd/31/da8a5e0142380cda13b363dfb70eafef.png',
                title: 'Zalo',
                package_name: 'com.zing.zalo',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/7b/ff/97/c94d349388a329dc5074bad6b5c6e0ca.png',
                title: 'TikTok',
                package_name: 'com.ss.android.ugc.trill',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/ed/af/7a/675df0274296a880592cf53d68b05dc9.png',
                title: 'Instagram',
                package_name: 'com.instagram.android',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/32/9a/7e/466fbfee8c190f2bc177dce6738794dd.png',
                title: 'Line',
                package_name: 'jp.naver.line.android',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/cc/2a/64/7e70a6e3f80d4ac1c6d295a40f34a6ad.png',
                title: 'WhatsApp',
                package_name: 'com.whatsapp',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/3b/19/5c/fc521fe8fdee6365bc57802cd81e8f09.png',
                title: 'Viber',
                package_name: 'com.viber.voip',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/6f/b5/bf/b12ef18a8f937b56eec595d4f1368502.png',
                title: 'Twitter',
                package_name: 'com.twitter.android',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/80/9a/23/5306fecae523e3ab7e05421e9d8a05ba.png',
                title: 'Pinterest',
                package_name: 'com.pinterest',
              },
            ],
            actions: [
              {
                icon: 'https://salt.tikicdn.com/ts/upload/c9/ea/98/a77289a0e9926961e0f9a906dcdcedff.png',
                title: 'Sao chép',
                type: 'copy',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/ff/34/31/bb46caed68baaa706926ba5863ae8a69.png',
                title: 'SMS',
                type: 'share_via_sms',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/5d/86/6e/d6bbd6de0ca7c8757ac15af532f8a650.png',
                title: 'Email',
                type: 'share_via_email',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/d9/3e/56/e1916e9624a1e7a6035000bf7f57fed9.png',
                title: 'Thêm',
                type: 'default_share',
              },
            ],
          },
        },
        mobileWeb: {
          pwa_banner_show: true,
          pwa_banner_expiry_days: 2,
          reward_revamp: 'tikier',
          chatBotEnable: true,
          showCouponCode: true,
          myAccountShowCouponCode: true,
          showExternalSellerPrice: false,
          showExternalPrices: false,
          exp_browse_external_price_clickable: false,
          impressionEnable: true,
          tkngon_age_confirm_session_duration_interval_second: 1800000,
          newPersonalizeAPI: true,
          pdp_quantity_sold: 'new',
          onePageCheckoutEnable: true,
          allowComboWidget: true,
          serviceWorker: {
            enable: true,
            enableTrackity: true,
          },
          freeship_home_header: {
            image_url:
              'https://salt.tikicdn.com/ts/brickv2og/db/eb/7c/a926af0ba3dc2802148bfc39563180c2.png',
            url: 'https://tiki.vn/sep/my-sep',
            width: 90.1,
            height: 34,
          },
          shareToEarn: {
            popup_background_color: '#856EFA',
            popup_header_image_url:
              'https://salt.tikicdn.com/ts/upload/28/74/b6/fc33902e7c90a643705c2a6b1a31d2bf.png',
            popular_apps: [
              {
                icon: 'https://salt.tikicdn.com/ts/upload/7b/06/71/32738d3827021cc973aac49d53945160.png',
                title: 'FaceBook',
                package_name: 'com.facebook.katana',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/e6/fb/b4/31e2d7b0fed5775c999dfb5e5bc0ab38.png',
                title: 'Messenger',
                package_name: 'com.facebook.orca',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/36/98/59/a3e7abb1fa23676ab93cc15cae5e1b8a.png',
                title: 'Telegram',
                package_name: 'org.telegram.messenger',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/cc/fd/31/da8a5e0142380cda13b363dfb70eafef.png',
                title: 'Zalo',
                package_name: 'com.zing.zalo',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/7b/ff/97/c94d349388a329dc5074bad6b5c6e0ca.png',
                title: 'TikTok',
                package_name: 'com.ss.android.ugc.trill',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/ed/af/7a/675df0274296a880592cf53d68b05dc9.png',
                title: 'Instagram',
                package_name: 'com.instagram.android',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/32/9a/7e/466fbfee8c190f2bc177dce6738794dd.png',
                title: 'Line',
                package_name: 'jp.naver.line.android',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/cc/2a/64/7e70a6e3f80d4ac1c6d295a40f34a6ad.png',
                title: 'WhatsApp',
                package_name: 'com.whatsapp',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/3b/19/5c/fc521fe8fdee6365bc57802cd81e8f09.png',
                title: 'Viber',
                package_name: 'com.viber.voip',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/6f/b5/bf/b12ef18a8f937b56eec595d4f1368502.png',
                title: 'Twitter',
                package_name: 'com.twitter.android',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/80/9a/23/5306fecae523e3ab7e05421e9d8a05ba.png',
                title: 'Pinterest',
                package_name: 'com.pinterest',
              },
            ],
            actions: [
              {
                icon: 'https://salt.tikicdn.com/ts/upload/c9/ea/98/a77289a0e9926961e0f9a906dcdcedff.png',
                title: 'Sao chép',
                type: 'copy',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/ff/34/31/bb46caed68baaa706926ba5863ae8a69.png',
                title: 'SMS',
                type: 'share_via_sms',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/5d/86/6e/d6bbd6de0ca7c8757ac15af532f8a650.png',
                title: 'Email',
                type: 'share_via_email',
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/d9/3e/56/e1916e9624a1e7a6035000bf7f57fed9.png',
                title: 'Thêm',
                type: 'default_share',
              },
            ],
          },
        },
        forceContent: {
          couponList: {
            NY030106: {
              long_description:
                'Miễn phí giao nhanh TikiNOW, tối đa 39K cho đơn hàng từ 399K.\nChỉ áp dụng cho phương thức Giao Trong Ngày, 2H và 3H.\nMỗi khách hàng được sử dụng tối đa 1 lần',
              short_title: 'Freeship TikiNOW',
            },
            NY030101: {
              short_title: 'Freeship TikiNOW 50K',
              icon_url:
                'https://salt.tikicdn.com/cache/128x128/ts/upload/92/ad/57/0d9a096885400b7b4752b67afdc72898.png',
              long_description:
                'Miễn phí giao nhanh TikiNOW, tối đa 50K cho tất cả đơn hàng.\nKhông áp dụng cho Sản phẩm là Rượu trên 15 độ.\nChỉ áp dụng cho phương thức Giao Trong Ngày, 2H và 3H.\nMỗi khách hàng được sử dụng tối đa 1 lần.',
            },
          },
        },
        ldpEvent: {
          enabled: true,
          data: {
            name: 'Gói thành viên đặc quyền - Astra Rewards',
            description: 'Gói thành viên đặc quyền - Astra Rewards',
            url: 'https://tiki.vn/astra-rewards',
            image: {
              url: 'https://salt.tikicdn.com/cache/w1440/ts/ta/0c/7a/e5/8537205de6e7d04fd82e6f2653f8d48f.png.webp',
            },
          },
        },
      },
      chatbotParams: {
        use_token: false,
        chat_params: {
          useClientSenderInfo: false,
          senderId: 'a0a88f59425909c69e189f6fb39cc880',
          senderName: 'Lâm Hùng',
          senderToken: '',
        },
        chatbot_url:
          'https://livechat.fpt.ai/v36/src/index.html?botcode=8e90ffe36eddd6bf26f3f87058834ef3&botname=Tr%C3%B2%20chuy%E1%BB%87n%20c%C3%B9ng%20Tiki&sendername=&scendpoint=livechat.fpt.ai%3A443&time=1646994431453&subchannel=&themes=&styles=%7B%22headerColorType%22%3A%22gradient%22,%22headerSolid%22%3A%22%23FFB26CFF%22,%22headerGradient1%22%3A%22%23F5AA3EFF%22,%22headerGradient2%22%3A%22%23E7532FFF%22,%22headerTextColor%22%3A%22%23AD1300EC%22,%22headerLogoEnable%22%3Afalse,%22headerLogoLink%22%3A%22https%3A%2F%2Fchatbot-tools.fpt.ai%2Flivechat-builder%2Fimg%2FIcon-fpt-ai.png%22,%22headerText%22%3A%22Tr%C3%B2%20chuy%E1%BB%87n%20c%C3%B9ng%20Tiki%22,%22primaryColor%22%3A%22%23ECC286FF%22,%22secondaryColor%22%3A%22%23F1754BDE%22,%22primaryTextColor%22%3A%22%23BD1238FF%22,%22secondaryTextColor%22%3A%22%23FFFFFFFF%22,%22buttonColor%22%3A%22%23F0DEBAFF%22,%22buttonTextColor%22%3A%22%23D8670AFF%22,%22bodyBackgroundEnable%22%3Atrue,%22bodyBackgroundLink%22%3A%22https%3A%2F%2Fi.imgur.com%2FLpRF9LK.jpg%22,%22avatarBot%22%3A%22https%3A%2F%2Fi.imgur.com%2FSbCzsly.png%22,%22sendMessagePlaceholder%22%3A%22Nh%E1%BA%ADp%20tin%20nh%E1%BA%AFn%22,%22floatButtonLogo%22%3A%22https%3A%2F%2Fi.imgur.com%2FbMRETYa.jpg%22,%22floatButtonTooltip%22%3A%22Tika%20c%C3%B3%20th%E1%BB%83%20h%E1%BB%97%20tr%E1%BB%A3%20g%C3%AC%20cho%20b%E1%BA%A1n%3F%22,%22floatButtonTooltipEnable%22%3Atrue,%22customerLogo%22%3A%22https%3A%2F%2Fi.imgur.com%2F0K855hn.png%22,%22customerWelcomeText%22%3A%22%C4%90i%E1%BB%81n%20t%C3%AAn%20c%E1%BB%A7a%20b%E1%BA%A1n%22,%22customerButtonText%22%3A%22B%E1%BA%AFt%20%C4%91%E1%BA%A7u%22,%22prefixEnable%22%3Atrue,%22prefixType%22%3A%22radio%22,%22prefixOptions%22%3A%5B%22Anh%22,%22Ch%E1%BB%8B%22%5D,%22prefixPlaceholder%22%3A%22Danh%20x%C6%B0ng%22,%22headerBackground%22%3A%22linear-gradient%2886.7deg,%20%23F5AA3EFF%200.85%25,%20%23E7532FFF%2098.94%25%29%22,%22css%22%3A%22%22%7D',
        chatbot_script:
          "<script>\r\n \r\n    // Configs\r\n \r\n    let liveChatBaseUrl   = document.location.protocol + '//' + 'livechat.fpt.ai/v36/src'\r\n \r\n    let LiveChatSocketUrl = 'livechat.fpt.ai:443'\r\n \r\n    let FptAppCode        = '8e90ffe36eddd6bf26f3f87058834ef3'\r\n \r\n    let FptAppName        = 'Trò chuyện cùng Tiki'\r\n \r\n    // Define custom styles\r\n \r\n    let CustomStyles = {\r\n \r\n        // header\r\n \r\n        headerBackground: 'linear-gradient(86.7deg, #F5AA3EFF 0.85%, #E7532FFF 98.94%)',\r\n \r\n        headerTextColor: '#AD1300EC',\r\n \r\n        headerLogoEnable: false,\r\n \r\n        headerLogoLink: 'https://chatbot-tools.fpt.ai/livechat-builder/img/Icon-fpt-ai.png',\r\n \r\n        headerText: 'Trò chuyện cùng Tiki',\r\n \r\n        // main\r\n \r\n        primaryColor: '#ECC286FF',\r\n \r\n        secondaryColor: '#F1754BDE',\r\n \r\n        primaryTextColor: '#BD1238FF',\r\n \r\n        secondaryTextColor: '#FFFFFFFF',\r\n \r\n        buttonColor: '#F0DEBAFF',\r\n \r\n        buttonTextColor: '#D8670AFF',\r\n \r\n        bodyBackgroundEnable: true,\r\n \r\n        bodyBackgroundLink: 'https://i.imgur.com/LpRF9LK.jpg',\r\n \r\n        avatarBot: 'https://i.imgur.com/SbCzsly.png',\r\n \r\n        sendMessagePlaceholder: 'Nhập tin nhắn',\r\n \r\n        // float button\r\n \r\n        floatButtonLogo: 'https://i.imgur.com/bMRETYa.jpg',\r\n \r\n        floatButtonTooltip: 'Tika có thể hỗ trợ gì cho bạn?',\r\n \r\n        floatButtonTooltipEnable: true,\r\n \r\n        // start screen\r\n \r\n        customerLogo: 'https://i.imgur.com/0K855hn.png',\r\n \r\n        customerWelcomeText: 'Điền tên của bạn',\r\n \r\n        customerButtonText: 'Bắt đầu',\r\n \r\n        prefixEnable: true,\r\n \r\n        prefixType: 'radio',\r\n \r\n        prefixOptions: [\"Anh\",\"Chị\"],\r\n \r\n        prefixPlaceholder: 'Danh xưng',\r\n \r\n        // custom css\r\n \r\n        css: ''\r\n \r\n    }\r\n \r\n    // Get bot code from url if FptAppCode is empty\r\n \r\n    if (!FptAppCode) {\r\n \r\n        let appCodeFromHash = window.location.hash.substr(1)\r\n \r\n        if (appCodeFromHash.length === 32) {\r\n \r\n            FptAppCode = appCodeFromHash\r\n \r\n        }\r\n \r\n    }\r\n \r\n    // Set Configs\r\n \r\n    let FptLiveChatConfigs = {\r\n \r\n        appName: FptAppName,\r\n \r\n        appCode: FptAppCode,\r\n \r\n        themes : '',\r\n \r\n        styles : CustomStyles\r\n \r\n    }\r\n \r\n    // Append Script\r\n \r\n    let FptLiveChatScript  = document.createElement('script')\r\n \r\n    FptLiveChatScript.id   = 'fpt_ai_livechat_script'\r\n \r\n    FptLiveChatScript.src  = liveChatBaseUrl + '/static/fptai-livechat.js'\r\n \r\n    document.body.appendChild(FptLiveChatScript)\r\n \r\n    // Append Stylesheet\r\n \r\n    let FptLiveChatStyles  = document.createElement('link')\r\n \r\n    FptLiveChatStyles.id   = 'fpt_ai_livechat_script'\r\n \r\n    FptLiveChatStyles.rel  = 'stylesheet'\r\n \r\n    FptLiveChatStyles.href = liveChatBaseUrl + '/static/fptai-livechat.css'\r\n \r\n    document.body.appendChild(FptLiveChatStyles)\r\n \r\n    // Init\r\n \r\n    FptLiveChatScript.onload = function () {\r\n \r\n        fpt_ai_render_chatbox(FptLiveChatConfigs, liveChatBaseUrl, LiveChatSocketUrl)\r\n \r\n    }\r\n \r\n</script>",
      },
    },
    pushInApp: {
      poll: null,
      coupon: {},
    },
    directory: {
      regions: [],
      districts: [],
      wards: [],
    },
    product: {
      addOnIds: {},
      productDetail: {
        id: 197216279,
        master_id: 197216279,
        sku: '1974938370781',
        name: 'Apple iPhone 14 Pro',
        url_key: 'apple-iphone-14-pro-p197216279',
        url_path: 'apple-iphone-14-pro-p197216279.html?spid=197216297',
        short_url: 'https://tiki.vn/product-p197216279.html?spid=197216297',
        type: 'configurable',
        book_cover: null,
        short_description:
          'Nội dung quảng cáoiPhone 14 Pro. Bắt trọn chi tiết ấn tượng với Camera Chính 48MP. Trải nghiệm iPhone theo cách hoàn toàn mới với Dynamic Island và màn hình Luôn Bật. Phát Hiện Va Chạm,1 một tính năn...',
        price: 32990000,
        list_price: 34990000,
        original_price: 34990000,
        badges: [
          {
            code: 'new_pdp',
            text: 'v1',
          },
        ],
        badges_new: [],
        discount: 2000000,
        discount_rate: 6,
        rating_average: 5,
        review_count: 63,
        review_text: '(63)',
        favourite_count: 0,
        thumbnail_url:
          'https://salt.tikicdn.com/cache/280x280/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
        has_ebook: false,
        inventory_status: 'available',
        inventory_type: 'instock',
        productset_group_name:
          'Điện Thoại - Máy Tính Bảng/Điện thoại Smartphone',
        is_fresh: false,
        seller: null,
        is_flower: false,
        has_buynow: true,
        is_gift_card: false,
        salable_type: null,
        data_version: 3300,
        day_ago_created: 51,
        all_time_quantity_sold: 183,
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
        is_baby_milk: false,
        is_acoholic_drink: false,
        description:
          '<h5>Nội dung quảng cáo</h5>\n<p>iPhone 14 Pro. Bắt trọn chi tiết ấn tượng với Camera Chính 48MP. Trải nghiệm iPhone theo cách hoàn toàn mới với Dynamic Island và màn hình Luôn Bật. Phát Hiện Va Chạm,<sup>1</sup> một tính năng an toàn mới, thay bạn gọi trợ giúp khi cần kíp.</p>\n<h5>Tính năng nổi bật</h5>\n<ul><li>Màn hình Super Retina XDR 6,1 inch<sup>2</sup> với tính năng Luôn Bật và ProMotion</li>\n<li>Dynamic Island, một cách mới tuyệt diệu để tương tác với iPhone</li>\n<li>Camera Chính 48MP cho độ phân giải gấp 4 lần</li>\n<li>Chế độ Điện Ảnh nay đã hỗ trợ 4K Dolby Vision tốc độ lên đến 30 fps</li>\n<li>Chế độ Hành Động để quay video cầm tay mượt mà, ổn định</li>\n<li>Công nghệ an toàn quan trọng – Phát Hiện Va Chạm1 thay bạn gọi trợ giúp khi cần kíp</li>\n<li>Thời lượng pin cả ngày và thời gian xem video lên đến 23 giờ<sup>3</sup></li>\n<li>A16 Bionic, chip điện thoại thông minh tuyệt đỉnh. Mạng di động 5G siêu nhanh<sup>4</sup></li>\n<li>Các tính năng về độ bền dẫn đầu như Ceramic Shield và khả năng chống nước<sup>5</sup></li>\n<li>iOS 16 đem đến thêm nhiều cách để cá nhân hóa, giao tiếp và chia sẻ<sup>6</sup></li>\n</ul><h5>Pháp lý</h5>\n<p><sup>1</sup>SOS Khẩn Cấp sử dụng kết nối mạng di động hoặc Cuộc Gọi Wi-Fi.<br /><sup>2</sup>Màn hình có các góc bo tròn. Khi tính theo hình chữ nhật, kích thước màn hình theo đường chéo là 6,12 inch.<br />Diện tích hiển thị thực tế nhỏ hơn.<br /><sup>3</sup>Thời lượng pin khác nhau tùy theo cách sử dụng và cấu hình; truy cập apple.com/batteries để biết thêm thông tin.<br /><sup>4</sup>Cần có gói cước dữ liệu. Mạng 5G chỉ khả dụng ở một số thị trường và được cung cấp qua một số nhà mạng. Tốc độ có thể thay đổi tùy địa điểm và nhà mạng. Để biết thông tin về hỗ trợ mạng 5G, vui lòng liên hệ nhà mạng và truy cập apple.com/iphone/cellular.<br /><sup>5</sup>iPhone 14 Pro có khả năng chống tia nước, chống nước và chống bụi. Sản phẩm đã qua kiểm nghiệm trong điều kiện phòng thí nghiệm có kiểm soát đạt mức IP68 theo tiêu chuẩn IEC 60529 (chống nước ở độ sâu tối đa 6 mét trong vòng tối đa 30 phút). Khả năng chống tia nước, chống nước và chống bụi không phải là các điều kiện vĩnh viễn. Khả năng này có thể giảm do hao mòn thông thường. Không sạc pin khi iPhone đang bị ướt. Vui lòng tham khảo hướng dẫn sử dụng để biết cách lau sạch và làm khô máy. Không bảo hành sản phẩm bị hỏng do thấm chất lỏng.<br /><sup>6</sup>Một số tính năng không khả dụng tại một số quốc gia hoặc khu vực.</p>\n<h5>Thông số kỹ thuật</h5>\n<p>Truy cập <a href="apple.com/iphone/compare">apple.com/iphone/compare</a></p><p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</p>',
        images: [
          {
            base_url:
              'https://salt.tikicdn.com/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
          },
          {
            base_url:
              'https://salt.tikicdn.com/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
          },
          {
            base_url:
              'https://salt.tikicdn.com/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
          },
          {
            base_url:
              'https://salt.tikicdn.com/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
          },
          {
            base_url:
              'https://salt.tikicdn.com/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
          },
          {
            base_url:
              'https://salt.tikicdn.com/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
          },
          {
            base_url:
              'https://salt.tikicdn.com/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
          },
          {
            base_url:
              'https://salt.tikicdn.com/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
          },
          {
            base_url:
              'https://salt.tikicdn.com/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
          },
          {
            base_url:
              'https://salt.tikicdn.com/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
          },
        ],
        warranty_policy: null,
        brand: {
          id: 17827,
          name: 'Apple',
          slug: 'apple',
        },
        current_seller: {
          id: 1,
          sku: '9857794441555',
          name: 'Tiki Trading',
          link: 'https://tiki.vn/cua-hang/tiki-trading',
          logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
          price: 32990000,
          product_id: '197216297',
          store_id: 40395,
          is_best_store: false,
          is_offline_installment_supported: null,
        },
        other_sellers: [],
        seller_specifications: [
          {
            name: 'Tiki hoàn tiền 111% nếu phát hiện hàng giả',
            url: null,
            value: null,
          },
          {
            name: 'Cam kết hàng chính hiệu',
            url: null,
            value: null,
          },
        ],
        specifications: [
          {
            name: 'Content',
            attributes: [
              {
                code: 'brand',
                name: 'Thương hiệu',
                value: 'Apple',
              },
              {
                code: 'brand_country',
                name: 'Xuất xứ thương hiệu',
                value: 'Mỹ',
              },
              {
                code: 'camera_sau',
                name: 'Camera sau',
                value: 'Chính 48 MP &amp; Phụ 12 MP, 12 MP',
              },
              {
                code: 'camera_truoc',
                name: 'Camera trước',
                value: '12 MP',
              },
              {
                code: 'chip_set',
                name: 'Chip set',
                value: 'A16 Bionic',
              },
              {
                code: 'dimensions',
                name: 'Kích thước',
                value: 'Dài 164 mm - Ngang 75.4 mm - Dày 7.9 mm',
              },
              {
                code: 'display_type',
                name: 'Loại/ Công nghệ màn hình',
                value: 'Super Retina XDR ',
              },
              {
                code: 'ho_tro_5g',
                name: 'Hỗ trợ 5G',
                value: 'Có',
              },
              {
                code: 'khe_sim',
                name: 'Số sim',
                value: '2 SIM',
              },
              {
                code: 'loai_sim',
                name: 'Loại Sim',
                value: '1 Nano SIM và 1 eSIM hoặc 2 eSIM',
              },
              {
                code: 'origin',
                name: 'Xuất xứ',
                value: 'Trung Quốc',
              },
              {
                code: 'product_weight',
                name: 'Trọng lượng sản phẩm',
                value: '175g',
              },
              {
                code: 'ram',
                name: 'RAM',
                value: '6GB, Bionic 6 nhân',
              },
              {
                code: 'screen_size',
                name: 'Kích thước màn hình',
                value: '6.1 inch',
              },
            ],
          },
        ],
        product_links: [],
        configurable_options: [
          {
            code: 'option1',
            name: 'Màu',
            position: 0,
            show_preview_image: true,
            values: [
              {
                label: 'Bạc',
              },
              {
                label: 'Tím',
              },
              {
                label: 'Vàng',
              },
              {
                label: 'Đen',
              },
            ],
          },
          {
            code: 'option2',
            name: 'Dung lượng',
            position: 0,
            show_preview_image: false,
            values: [
              {
                label: '256GB',
              },
              {
                label: '512GB',
              },
            ],
          },
        ],
        configurable_products: [
          {
            child_id: 197216290,
            id: 197216292,
            images: [
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/0d/f8/d0/5f7faf45fa301f732be6e02687e43f14.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/0d/f8/d0/5f7faf45fa301f732be6e02687e43f14.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/0d/f8/d0/5f7faf45fa301f732be6e02687e43f14.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/b4/a4/2d/01531fbacb9d98bbb4730e81ede9e2db.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/b4/a4/2d/01531fbacb9d98bbb4730e81ede9e2db.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/b4/a4/2d/01531fbacb9d98bbb4730e81ede9e2db.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/dc/d9/c6/0a12f93687b29d65447ae529e3adf1c7.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/dc/d9/c6/0a12f93687b29d65447ae529e3adf1c7.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/dc/d9/c6/0a12f93687b29d65447ae529e3adf1c7.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/e3/3e/7b/16fb3d2347bdb9b11c42fe3960e67f49.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/e3/3e/7b/16fb3d2347bdb9b11c42fe3960e67f49.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/e3/3e/7b/16fb3d2347bdb9b11c42fe3960e67f49.jpg',
              },
            ],
            inventory_status: 'available',
            name: 'Apple iPhone 14 Pro 256GB Bạc',
            option1: 'Bạc',
            option2: '256GB',
            price: 31990000,
            selected: false,
            seller: {
              id: 1,
              name: 'Tiki Trading',
            },
            sku: '6319188186894',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/ff/56/67/e3b9ff9622ed61e1ee11bf2297bcc2d8.png',
          },
          {
            child_id: 197216311,
            id: 197216313,
            images: [
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/2e/ee/a4/71b99f8a3387be873f2d8672bdec8e26.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/2e/ee/a4/71b99f8a3387be873f2d8672bdec8e26.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/2e/ee/a4/71b99f8a3387be873f2d8672bdec8e26.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/46/1f/7e/bb8f4073cc83615463491eb411b11b95.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/46/1f/7e/bb8f4073cc83615463491eb411b11b95.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/46/1f/7e/bb8f4073cc83615463491eb411b11b95.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/5a/fe/e5/c9f3c80c9b432527886416e41324be41.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/5a/fe/e5/c9f3c80c9b432527886416e41324be41.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/5a/fe/e5/c9f3c80c9b432527886416e41324be41.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/7a/ac/24/ecb9346c7370861d0e0330b11628c0d4.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/7a/ac/24/ecb9346c7370861d0e0330b11628c0d4.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/7a/ac/24/ecb9346c7370861d0e0330b11628c0d4.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/90/30/66/36e4bb63c0b6cdaf2c87d2094f9e8980.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/90/30/66/36e4bb63c0b6cdaf2c87d2094f9e8980.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/90/30/66/36e4bb63c0b6cdaf2c87d2094f9e8980.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/fb/7b/3c/933f3ee8b8d8ee5e9667fa5b13e69507.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/fb/7b/3c/933f3ee8b8d8ee5e9667fa5b13e69507.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/fb/7b/3c/933f3ee8b8d8ee5e9667fa5b13e69507.jpg',
              },
            ],
            inventory_status: 'available',
            name: 'Apple iPhone 14 Pro 512GB Tím',
            option1: 'Tím',
            option2: '512GB',
            price: 37990000,
            selected: false,
            seller: {
              id: 1,
              name: 'Tiki Trading',
            },
            sku: '3438365852777',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/f5/52/80/bf8c8a44bbe2c3ffd1637d1baad8109d.png',
          },
          {
            child_id: 197216307,
            id: 197216309,
            images: [
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/0a/55/77/45d13d1f4271faf9276ae89813d4a7fc.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/0a/55/77/45d13d1f4271faf9276ae89813d4a7fc.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/0a/55/77/45d13d1f4271faf9276ae89813d4a7fc.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/a4/6b/85/50bbc6433b15582f04a2629cec68a69f.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/a4/6b/85/50bbc6433b15582f04a2629cec68a69f.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/a4/6b/85/50bbc6433b15582f04a2629cec68a69f.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/d6/fd/5c/fd0fbec52b837721b518a0e6001c7a7b.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/d6/fd/5c/fd0fbec52b837721b518a0e6001c7a7b.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/d6/fd/5c/fd0fbec52b837721b518a0e6001c7a7b.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/e6/68/9e/7bf67e9d549ef9281e2f9d27beaaed16.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/e6/68/9e/7bf67e9d549ef9281e2f9d27beaaed16.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/e6/68/9e/7bf67e9d549ef9281e2f9d27beaaed16.jpg',
              },
            ],
            inventory_status: 'available',
            name: 'Apple iPhone 14 Pro 512GB Vàng',
            option1: 'Vàng',
            option2: '512GB',
            price: 36990000,
            selected: false,
            seller: {
              id: 1,
              name: 'Tiki Trading',
            },
            sku: '7191064467451',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/0c/dd/e7/324c166c55311ad2c82681c8291b15a1.png',
          },
          {
            child_id: 197216295,
            id: 197216297,
            images: [
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
              },
            ],
            inventory_status: 'available',
            name: 'Apple iPhone 14 Pro 256GB Tím',
            option1: 'Tím',
            option2: '256GB',
            price: 32990000,
            selected: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
            },
            sku: '4974300659459',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
          },
          {
            child_id: 197216288,
            id: 197216289,
            images: [
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/59/ff/81/3ecc6c1ea3fc68e76f8ebdd3f6dd00e8.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/59/ff/81/3ecc6c1ea3fc68e76f8ebdd3f6dd00e8.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/59/ff/81/3ecc6c1ea3fc68e76f8ebdd3f6dd00e8.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/8a/15/ef/da840fa19edd78a62856d4190c34ef4d.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/8a/15/ef/da840fa19edd78a62856d4190c34ef4d.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/8a/15/ef/da840fa19edd78a62856d4190c34ef4d.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/9f/a8/50/9b2ee1335ec99e85ca59714509ba69fb.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/9f/a8/50/9b2ee1335ec99e85ca59714509ba69fb.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/9f/a8/50/9b2ee1335ec99e85ca59714509ba69fb.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/d7/13/01/71e8f09cab3275093d640db7248cd5c4.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/d7/13/01/71e8f09cab3275093d640db7248cd5c4.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/d7/13/01/71e8f09cab3275093d640db7248cd5c4.jpg',
              },
            ],
            inventory_status: 'available',
            name: 'Apple iPhone 14 Pro 256GB Đen',
            option1: 'Đen',
            option2: '256GB',
            price: 31990000,
            selected: false,
            seller: {
              id: 1,
              name: 'Tiki Trading',
            },
            sku: '3820127297872',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/0f/08/21/12eb60ad7be742d014afd8071b2b4710.png',
          },
          {
            child_id: 197216299,
            id: 197216301,
            images: [
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/59/ff/81/f76134355262fb9849ede3cdd6ff073b.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/59/ff/81/f76134355262fb9849ede3cdd6ff073b.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/59/ff/81/f76134355262fb9849ede3cdd6ff073b.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/8a/15/ef/c25ab382532807e3f8b8397c447b2c6f.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/8a/15/ef/c25ab382532807e3f8b8397c447b2c6f.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/8a/15/ef/c25ab382532807e3f8b8397c447b2c6f.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/9f/a8/50/523e2c0e462bfcd60ed4cdedbf506b66.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/9f/a8/50/523e2c0e462bfcd60ed4cdedbf506b66.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/9f/a8/50/523e2c0e462bfcd60ed4cdedbf506b66.jpg',
              },
              {
                large_url:
                  'https://salt.tikicdn.com/cache/w1200/ts/product/d7/13/01/902335d38e7222e30fc939fb21a1eb8c.jpg',
                medium_url:
                  'https://salt.tikicdn.com/cache/550x550/ts/product/d7/13/01/902335d38e7222e30fc939fb21a1eb8c.jpg',
                small_url:
                  'https://salt.tikicdn.com/cache/200x280/ts/product/d7/13/01/902335d38e7222e30fc939fb21a1eb8c.jpg',
              },
            ],
            inventory_status: 'available',
            name: 'Apple iPhone 14 Pro 512GB Đen',
            option1: 'Đen',
            option2: '512GB',
            price: 36990000,
            selected: false,
            seller: {
              id: 1,
              name: 'Tiki Trading',
            },
            sku: '5338812367868',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/0f/08/21/3d58e4c4d05c68b9d2c9d72da4e24d4b.png',
          },
        ],
        services_and_promotions: [],
        promitions: [],
        stock_item: {
          max_sale_qty: 1000,
          min_sale_qty: 1,
          preorder_date: null,
          qty: 1000,
        },
        add_on_title: 'Dịch Vụ Mua Kèm',
        add_on: [
          {
            id: 199942551,
            name: '[GÓI 1 NĂM] BH màn hình - Bồi hoàn tới 5 triệu',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/44/35/53/3765f5255309dd6de408a50cd983df7b.png',
            price: 121000,
            add_on_description:
              'Bảo hiểm cho màn hình điện thoại di động trước những sự cố bất ngờ, không được bảo hành theo chính sách của nhà sản xuất\nChi trả đến 5.000.000 đ chi phí sửa chữa màn hình điện thoại cho các sự cố rơi vỡ màn hình\nThời hạn bảo hiểm: 12 tháng. Bạn có thể gia hạn để luôn được bảo vệ\nÁp dụng cho cả điện thoại cũ và mới. An tâm sử dụng, không còn đau đầu vì chi phí sửa chữa tốn kém\nGởi yêu cầu bồi thường 100% trực tuyến. Bạn không cần thanh toán trước khi sửa chữa\nHệ thống trung tâm bảo hành sửa chữa điện thoại uy tín do Công ty Bảo Hiểm ủy quyền trên toàn quốc\nCung cấp bởi Công ty Bảo hiểm PVI, kết hợp đối tác Bảo hiểm số Digiin\nBấm THÔNG TIN CHI TIẾT bên dưới để xem toàn bộ quyền lợi và nội dung chương trình',
            add_on_description_list: [
              'Bảo hiểm cho màn hình điện thoại di động trước những sự cố bất ngờ, không được bảo hành theo chính sách của nhà sản xuất',
              'Chi trả đến 5.000.000 đ chi phí sửa chữa màn hình điện thoại cho các sự cố rơi vỡ màn hình',
              'Thời hạn bảo hiểm: 12 tháng. Bạn có thể gia hạn để luôn được bảo vệ',
              'Áp dụng cho cả điện thoại cũ và mới. An tâm sử dụng, không còn đau đầu vì chi phí sửa chữa tốn kém',
              'Gởi yêu cầu bồi thường 100% trực tuyến. Bạn không cần thanh toán trước khi sửa chữa',
              'Hệ thống trung tâm bảo hành sửa chữa điện thoại uy tín do Công ty Bảo Hiểm ủy quyền trên toàn quốc',
              'Cung cấp bởi Công ty Bảo hiểm PVI, kết hợp đối tác Bảo hiểm số Digiin',
              'Bấm THÔNG TIN CHI TIẾT bên dưới để xem toàn bộ quyền lợi và nội dung chương trình',
            ],
            list_price: 121000,
            is_visible: false,
            url: 'https://tiki.vn/bao-hiem-roi-vo-man-hinh-dien-thoai-12-thang-bao-hiem-5-trieu-p199942551.html',
            add_on_information_title: 'Thông tin chi tiết',
            add_on_information_url: 'https://tiki.vn/bao-hiem-so/168/thong-tin',
            is_default_select_addon: 0,
          },
        ],
        quantity_sold: {
          text: 'Đã bán 183',
          value: 183,
        },
        categories: {
          id: 1795,
          name: 'Điện thoại Smartphone',
          is_leaf: true,
        },
        breadcrumbs: [
          {
            url: '/dien-thoai-may-tinh-bang/c1789',
            name: 'Điện Thoại - Máy Tính Bảng',
            category_id: 1789,
          },
          {
            url: '/dien-thoai-smartphone/c1795',
            name: 'Điện thoại Smartphone',
            category_id: 1795,
          },
          {
            url: 'https://tiki.vn/apple-iphone-14-pro-p197216279.html',
            name: 'Apple iPhone 14 Pro',
            category_id: 0,
          },
        ],
        installment_info: {
          month: 12,
          price: 2749166,
          redirect_url:
            'https://tiki.vn/installment?masterId=197216279&&spid=197216297',
        },
        installment_info_v2: {
          title: 'Trả góp',
          summary: '2.749.166 ₫/tháng',
          redirect_url:
            'https://tiki.vn/installment?masterId=197216279&&spid=197216297',
          details: null,
        },
        is_seller_in_chat_whitelist: false,
        inventory: {
          product_virtual_type: null,
          fulfillment_type: 'tiki_delivery',
        },
        warranty_info: [
          {
            name: 'Thời gian bảo hành',
            value: '12 Tháng',
          },
          {
            name: 'Hình thức bảo hành',
            value: 'Hóa đơn',
          },
          {
            name: 'Nơi bảo hành',
            value: 'Bảo hành chính hãng',
          },
          {
            name: 'Hướng dẫn bảo hành',
            value: 'Xem chi tiết',
            url: 'https://hotro.tiki.vn/s/article/chinh-sach-bao-hanh-tai-tiki-nhu-the-nao',
          },
        ],
        return_and_exchange_policy:
          'Đổi trả trong<br><b>7 ngày</b><br>nếu sp lỗi',
        asa_cashback_widget: {
          sep: 0,
          rate: 310,
          astra_convert_rate: 0,
          text_color: '#402DA1',
          short_description:
            'Tham gia các gói thành viên Astra Rewards cao cấp hơn để được nhiều ưu đãi hơn',
          background_color: '#F2F0FE',
          asa_plus_badge: '',
          new_badge:
            'https://salt.tikicdn.com/ts/upload/43/01/71/d74d0e9e37a9bb14f35dcc0c816d2038.gif',
          text: 'Thưởng 659,80 ASA (≈ 204.538đ)',
          icon: {
            height: 16,
            width: 13,
            url: 'https://salt.tikicdn.com/ts/upload/df/e2/b4/063c4d55ca380f818547f00f5175d39f.png',
          },
          button: {
            text: 'Khám phá thêm',
            url: 'https://tiki.vn/sep/my-sep',
          },
          amplitude: {
            has_freeship_plus_benefit: true,
            partner_rewards_amount: 0,
            tiki_rewards_amount: 659.8,
            total_rewards_amount: 659.8,
          },
          benefits: {
            title: 'Bạn là thành viên',
            sub_title: 'Thưởng 659,80 ASA',
            benefit_text: 'Điểm thưởng Astra dùng để làm gì?',
            sub_icon:
              'https://salt.tikicdn.com/ts/upload/7a/bf/c4/6ae829cb4698d5badb38413c0dafe354.png',
            type: 'sep_required',
            information_url: 'https://tiki.vn/sep/my-sep',
            icon_title:
              'https://salt.tikicdn.com/ts/ta/c5/cd/0f/e1789e9bdd31016f6444da63ce80cd52.png',
            list: [
              {
                icon: 'https://salt.tikicdn.com/ts/upload/31/1a/54/f4ad6056005c3c4b91d746cd5cd72e5a.png',
                text: 'Đổi Astra lấy mã giảm giá & freeship',
                link: null,
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/c9/a4/3f/ce4ec9a0e3c40aeb75a41ec4c181382f.png',
                text: 'Astra có thể trao đổi mua bán sang Tiki Xu',
                link: null,
              },
              {
                icon: 'https://salt.tikicdn.com/ts/upload/4c/26/19/fc8035082d1c3cf77e23bd2529d93f1e.png',
                text: 'Astra sinh lời khi bỏ ống Heo Vàng Astra',
                link: null,
              },
            ],
          },
          non_login_url_path: null,
        },
        asa_flash_swap: {
          icon: {
            height: 16,
            url: 'https://salt.tikicdn.com/ts/upload/df/e2/b4/063c4d55ca380f818547f00f5175d39f.png',
            width: 13,
          },
          text: 'Đổi Astra nhận 2.625 Xu mua sắm',
          version: 2,
          background_color: '#F2F0FE',
          asa_balance: 8.47077465057373,
          text_color: '#402DA1',
        },
        asa_share_btn: {
          benefits: {
            list: [
              {
                text: 'Khi bạn bè mua sản phẩm này qua link, bạn sẽ nhận thưởng TikiXu (~1% giá trị đơn) cho mỗi đơn',
              },
              {
                text: "Số Xu là ước tính. <a href='https://tiki.vn/khuyen-mai/chia-se-co-loi'>Chi tiết</a>",
              },
            ],
            sub_title: '329.900 Xu',
            title: 'Chia sẻ link nhận',
          },
          category_share: 'Điện thoại Smartphone (1795)',
          commission_rate: 1,
          price: 329900,
          price_format: '+329.900 Xu',
          sep: 0,
          share_message:
            'Mua Apple iPhone 14 Pro giá chỉ 32.990.000đ hoàn thêm tới 1.064,19 Astra ~ 329.900 Xu',
        },
        benefits: [
          {
            icon: 'https://salt.tikicdn.com/ts/upload/2c/48/44/720434869e103b03aaaf1a104d91ad25.png',
            text: 'Hoàn tiền<br><b>111%</b><br>nếu hàng giả',
          },
          {
            icon: 'https://salt.tikicdn.com/ts/upload/4b/a1/23/1606089d5423e5cba05e3820ad39708e.png',
            text: 'Thông tin<br>bảo hành',
            extra_text: 'XEM CHI TIẾT',
            extra_header: 'Thông tin bảo hành',
            extra: [
              {
                name: 'Nhà cung cấp',
                value: 'Tiki Trading',
              },
              {
                name: 'Thời gian bảo hành',
                value: '12 Tháng',
              },
              {
                name: 'Hình thức bảo hành',
                value: 'Hóa đơn',
              },
              {
                name: 'Nơi bảo hành',
                value: 'Bảo hành chính hãng',
              },
              {
                name: 'Hướng dẫn bảo hành',
                value: 'Xem chi tiết',
                url: 'https://hotro.tiki.vn/s/article/chinh-sach-bao-hanh-tai-tiki-nhu-the-nao',
              },
            ],
          },
          {
            icon: 'https://salt.tikicdn.com/ts/upload/63/75/6a/144ada409519d72e2978ad2c61bc02a7.png',
            text: 'Đổi trả trong<br><b>7 ngày</b><br>nếu sp lỗi',
          },
        ],
        productNotFound: false,
        badgesMap: {
          new_pdp: {
            code: 'new_pdp',
            text: 'v1',
          },
        },
      },
      isLoadingFetchProductDetailClient: false,
      firstProductImage: {
        large_url:
          'https://salt.tikicdn.com/cache/w1200/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
        medium_url:
          'https://salt.tikicdn.com/cache/550x550/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
        small_url:
          'https://salt.tikicdn.com/cache/200x280/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
      },
      productInfo: {},
      widgetInfo: {},
      deliveryTime: [],
      deliveryTracking: null,
      actionModal: {
        isOpen: false,
        actionName: '',
        title: '',
        data: {},
        isImportModal: true,
      },
      snackbar: {
        snackVisible: false,
        message: '',
      },
      tikiFresh: {
        loading: false,
      },
      additionalFeePrefetch: {
        defaultLocations: [],
      },
      couponData: {
        text: '2 Mã Giảm Giá',
        labels: ['Giảm 1 triệu', 'Giảm 25K'],
        version: 1,
        data: [
          {
            seller_name: null,
            label: 'Giảm 1 triệu',
            tags: ['Chỉ cho App'],
            status: 'active',
            out_of_stock: false,
            coupon_id: 63935467,
            web_url: null,
            coupon_code: 'MOCAIP14',
            long_description:
              'Giảm 1 triệu cho đơn hàng từ 20 triệu khi thanh toán Ví Moca.\nÁp dụng cho iPhone 14 series thuộc nhà bán Tiki Trading.\nChỉ áp dụng khi mua hàng trên Tiki Mobile App.\nMỗi khách hàng được sử dụng tối đa 1 lần.',
            url: 'https://tiki.vn/khuyen-mai/moca-grab-tiki',
            seller_id: 0,
            payment: null,
            icon_name: 'Ví Moca',
            short_title: 'Giảm 1 triệu',
            period: 'HSD: 31/12/22',
            expired_at: 1672505999,
            simple_action: 'cart_fixed',
            coupon_type: 'MOCA_COUPON',
            discount_amount: 1000000,
            min_amount: 20000000,
            rule_id: 3035708,
            saved: false,
            short_description: 'Cho đơn hàng từ 20 triệu',
            icon_url:
              'https://salt.tikicdn.com/cache/128x128/ts/upload/a8/e1/32/f231d8edf0241c00efdda571bbc0c962.jpg',
            app_url: null,
          },
          {
            seller_name: null,
            label: 'Giảm 25K',
            tags: ['Chỉ cho App'],
            status: 'active',
            out_of_stock: false,
            coupon_id: 63695246,
            web_url: null,
            coupon_code: 'MOCA21025',
            long_description:
              'Giảm 25K cho đơn hàng từ 350K.\nKhông áp dụng cho các sản phẩm trong danh mục Sữa cho bé dưới 24 tháng , Phiếu quà tặng, Quảng cáo Tiki Ads, Sản phẩm dịch vụ số, Tini App, Sim số - Thẻ cào - Thẻ game, Tini App SD, Mã Phiếu Quà Tặng Tiki, Rượu từ 15%.\nKhông áp dụng cho 1 số nhà bán.\nChỉ áp dụng khi mua hàng trên Tiki Mobile App.\nMỗi khách hàng được sử dụng tối đa 1 lần.\nKhông áp dụng cho trả góp.',
            url: 'https://tiki.vn/khuyen-mai/moca-grab-tiki',
            seller_id: 0,
            payment: null,
            icon_name: 'Ví Moca',
            short_title: 'Giảm 25K',
            period: 'HSD: 31/10/22',
            expired_at: 1667235599,
            simple_action: 'cart_fixed',
            coupon_type: 'MOCA_COUPON',
            discount_amount: 25000,
            min_amount: 350000,
            rule_id: 3024234,
            saved: true,
            short_description: 'Cho đơn hàng từ 350K',
            icon_url:
              'https://salt.tikicdn.com/cache/128x128/ts/upload/a8/e1/32/f231d8edf0241c00efdda571bbc0c962.jpg',
            app_url: null,
          },
        ],
        log: '{"brand_id":17827,"sku":"6796201740668","price":31990000,"seller_id":1,"customer_group_id":8,"qty":1,"category_ids":[1795,2,1789],"shipping_plans":["STANDARD"],"customer_id":8731995}',
        firstLoaded: true,
      },
      savedCoupons: {},
      deliveryZone: {
        only_ship_to: null,
        only_sell_to: 'Sản phẩm này chỉ được bán tại',
        type: 'shipping_info',
        title: 'Thông Tin Giao Hàng Dự Kiến',
        delivery_options: [
          {
            time_estimation: 'Thứ 3, ngày 1/11',
            estimation_package_text: null,
            fee: 0,
            fees: [
              {
                type: 'delivery',
                text: 'Vận chuyển',
                original_fee: 18000,
                fee: 0,
              },
            ],
            title: 'Giao tiết kiệm',
            icon: 'https://salt.tikicdn.com/ts/upload/67/e4/c2/02b5400b39bb3371e06d33c1e9f4d854.png',
            icon_width: 32,
            icon_height: 14,
            type: 'standard',
            original_fee: 18000,
            promotion_rules: ['Freeship 10K đh 149K', 'Freeship 20K đh 299K'],
            human_readable_time: '2022-11-01 23:59:59',
            unix_time: 1667321999,
            remaining_seconds: 284964,
            order_route: 'hn_hcm',
            notes: ['0đ (đã trừ 18K Freeship)'],
          },
        ],
        delivery_options_description: 'Tiki Trading:',
        seller_name: 'Nhà bán Tiki Trading',
        is_shopping_delivery: true,
        bulky: null,
        firstLoaded: true,
      },
      sellerWidget: {
        seller: {
          id: 1,
          store_id: 40395,
          name: 'Tiki Trading',
          icon: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
          url: 'https://tiki.vn/cua-hang/tiki-trading',
          is_official: true,
          store_level: 'OFFICIAL_STORE',
          badge_img: {
            width: 68,
            height: 14,
            url: 'https://salt.tikicdn.com/ts/upload/5d/4c/f7/0261315e75127c2ff73efd7a1f1ffdf2.png',
          },
          is_followed: false,
          info: [
            {
              type: 'review',
              title: '4.7 / 5',
              sub_title: '5tr+ đánh giá',
            },
            {
              type: 'normal',
              title: '443k+',
              sub_title: 'Người theo dõi',
            },
          ],
          avg_rating_point: 4.6598,
          review_count: 5065596,
          total_follower: 443325,
          days_since_joined: 1943,
        },
        products: [
          {
            default_spid: 197214033,
            price: 22490000,
            discount_rate: 10,
            inventory_status: 'available',
            id: 197214029,
            name: 'Apple iPhone 14',
            list_price: 24990000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/2c/6c/2e/e7db0a2802ee1451f3305b5872cc0865.png',
            rating_average: 5,
            review_count: 12,
            url_path: 'apple-iphone-14-p197214029.html?spid=197214033',
            quantity_sold: {
              text: 'Đã bán 52',
              value: 52,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 24990000,
            impression_info: [],
            advertisement: null,
          },
          {
            default_spid: 197214017,
            price: 24990000,
            discount_rate: 11,
            inventory_status: 'available',
            id: 197214015,
            name: 'Apple iPhone 14 Plus',
            list_price: 27990000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/98/8a/2b/20cdb4e6168b995e8b7a1f031559ea18.png',
            rating_average: 5,
            review_count: 16,
            url_path: 'apple-iphone-14-plus-p197214015.html?spid=197214017',
            quantity_sold: {
              text: 'Đã bán 40',
              value: 40,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 27990000,
            impression_info: [],
            advertisement: null,
          },
          {
            default_spid: 168721273,
            price: 12780000,
            discount_rate: 12,
            inventory_status: 'available',
            id: 183243019,
            name: 'Apple iPhone SE 2022',
            list_price: 14490000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/a8/46/0b/3b902315c152bd3666258f85eb008d69.jpg',
            rating_average: 4.95,
            review_count: 36,
            url_path: 'apple-iphone-se-2022-p183243019.html?spid=168721273',
            quantity_sold: {
              text: 'Đã bán 79',
              value: 79,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 14490000,
            impression_info: [],
            advertisement: null,
          },
          {
            default_spid: 70766417,
            price: 14490000,
            discount_rate: 15,
            inventory_status: 'available',
            id: 123345348,
            name: 'Apple iPhone 12',
            list_price: 16990000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/c1/4c/1c/2e5ced5d878995fec8abe48ec0afce14.jpg',
            rating_average: 4.95,
            review_count: 1204,
            url_path:
              'apple-iphone-12-hang-chinh-hang-p123345348.html?spid=70766417',
            quantity_sold: {
              text: 'Đã bán 1000+',
              value: 2620,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 16990000,
            impression_info: [],
            advertisement: null,
          },
          {
            default_spid: 123554531,
            price: 29530000,
            discount_rate: 20,
            inventory_status: 'available',
            id: 184061913,
            name: 'Apple iPhone 13 Pro Max',
            list_price: 36990000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/1b/26/17/34a3fbb4d6821f150a09aa035e9c3e6f.jpg',
            rating_average: 4.95,
            review_count: 1495,
            url_path:
              'apple-iphone-13-pro-max-hang-chinh-hang-p184061913.html?spid=123554531',
            quantity_sold: {
              text: 'Đã bán 1000+',
              value: 8305,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 36990000,
            impression_info: [],
            advertisement: null,
          },
          {
            default_spid: 32033719,
            price: 10890000,
            discount_rate: 16,
            inventory_status: 'available',
            id: 184036446,
            name: 'Apple iPhone 11',
            list_price: 12990000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/aa/24/e0/57914989351786ef9dfe027046ba4626.jpg',
            rating_average: 4.8,
            review_count: 2667,
            url_path: 'apple-iphone-11-p184036446.html?spid=32033719',
            quantity_sold: {
              text: 'Đã bán 1000+',
              value: 10709,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 12990000,
            impression_info: [],
            advertisement: null,
          },
          {
            default_spid: 123547399,
            price: 19060000,
            discount_rate: 24,
            inventory_status: 'available',
            id: 184059211,
            name: 'Apple iPhone 13',
            list_price: 24990000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/b7/ba/88/66059a54a3a139d45841d412379b1fe4.jpg',
            rating_average: 4.95,
            review_count: 1584,
            url_path:
              'apple-iphone-13-hang-chinh-hang-p184059211.html?spid=123547399',
            quantity_sold: {
              text: 'Đã bán 1000+',
              value: 4371,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 24990000,
            impression_info: [],
            advertisement: null,
          },
          {
            default_spid: 71523845,
            price: 520000,
            discount_rate: 34,
            inventory_status: 'available',
            id: 123836523,
            name: 'Adapter Sạc 1 Cổng USB Type-C 20W - Trắng',
            list_price: 790000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/b9/b0/cf/c7e8e18f606f3db4bef450cfacb53532.jpg',
            rating_average: 4.95,
            review_count: 2772,
            url_path:
              'adapter-sac-1-cong-usb-type-c-20w-trang-p123836523.html?spid=71523845',
            quantity_sold: {
              text: 'Đã bán 1000+',
              value: 8296,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 790000,
            impression_info: [],
            advertisement: null,
          },
          {
            default_spid: 175194014,
            price: 6490000,
            discount_rate: 28,
            inventory_status: 'available',
            id: 175194008,
            name: 'Apple Watch SE GPS Sport Band (Viền Nhôm, Dây Cao Su)',
            list_price: 8990000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/ba/32/3f/1f4957ea7e8ac07862235b8758503c69.jpg',
            rating_average: 4.8,
            review_count: 103,
            url_path:
              'apple-watch-se-gps-sport-band-vien-nhom-day-cao-su-p175194008.html?spid=175194014',
            quantity_sold: {
              text: 'Đã bán 249',
              value: 249,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 8990000,
            impression_info: [],
            advertisement: null,
          },
          {
            default_spid: 128678714,
            price: 9470000,
            discount_rate: 27,
            inventory_status: 'available',
            id: 128678712,
            name: 'Apple Watch Series 7 GPS Sport Band (Viền Nhôm, Dây Cao Su)',
            list_price: 12990000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/83/7b/e3/76c7446282ade0045d69bae32f89733d.jpg',
            rating_average: 4.95,
            review_count: 288,
            url_path:
              'apple-watch-series-7-gps-sport-band-vien-nhom-day-cao-su-p128678712.html?spid=128678714',
            quantity_sold: {
              text: 'Đã bán 649',
              value: 649,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 12990000,
            impression_info: [],
            advertisement: null,
          },
          {
            default_spid: 73788528,
            price: 27290000,
            discount_rate: 15,
            inventory_status: 'available',
            id: 124742926,
            name: 'MacBook Air M1 13 inch 2020',
            list_price: 31990000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/e6/54/09/f2d834ff0da382d97cb453448ab47aae.jpg',
            rating_average: 4.95,
            review_count: 755,
            url_path:
              'macbook-air-m1-13-inch-2020-p124742926.html?spid=73788528',
            quantity_sold: {
              text: 'Đã bán 1000+',
              value: 2288,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 31990000,
            impression_info: [],
            advertisement: null,
          },
          {
            default_spid: 7817449,
            price: 4690000,
            discount_rate: 33,
            inventory_status: 'available',
            id: 123840212,
            name: 'Apple Watch Series 3 GPS Sport Band (Viền Nhôm, Dây Cao Su)',
            list_price: 6990000,
            type: 'simple',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/ef/1b/37/fceac0cb858149a84dcddd24405a728a.jpg',
            rating_average: 4.8,
            review_count: 426,
            url_path:
              'apple-watch-series-3-gps-sport-band-vien-nhom-day-cao-su-p123840212.html?spid=7817449',
            quantity_sold: {
              text: 'Đã bán 1000+',
              value: 1306,
            },
            badges_new: [
              {
                placement: 'bottom',
                code: 'freeship_tikifast',
                type: 'icon_badge',
                icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                icon_width: 91,
                icon_height: 16,
                text: '',
                text_color: '',
                background_color: '',
                suffix_icon: '',
              },
            ],
            original_price: 6990000,
            impression_info: [],
            advertisement: null,
          },
        ],
        firstLoaded: true,
      },
      isFollowedOfSeller: false,
      personalWidget: {
        pdp_after_shipping: [
          {
            code: 'similar_products',
            placement: 'pdp_after_shipping',
            type: 'items_without_tabs',
            title: 'Sản Phẩm Tương Tự',
            image_url: '',
            image_width: 0,
            image_height: 0,
            more_link: null,
            items: [
              {
                default_spid: 197214017,
                price: 24990000,
                discount_rate: 11,
                inventory_status: 'available',
                id: 197214015,
                name: 'Apple iPhone 14 Plus',
                list_price: 27990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/98/8a/2b/20cdb4e6168b995e8b7a1f031559ea18.png',
                rating_average: 5,
                review_count: 16,
                url_path: 'apple-iphone-14-plus-p197214015.html?spid=197214017',
                quantity_sold: {
                  text: 'Đã bán 40',
                  value: 40,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 91,
                    icon_height: 16,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 27990000,
                impression_info: [
                  {
                    impression_id: 'fe779691-f540-495c-9c46-99637974b731',
                    metadata: {
                      product_id: 197214015,
                      service_name: 'reco',
                      version: 'similar_products_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 197214041,
                price: 22490000,
                discount_rate: 10,
                inventory_status: 'available',
                id: 197214029,
                name: 'Apple iPhone 14',
                list_price: 24990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/ca/5d/be/0466fed7eaa6095baecd90f06419bc09.png',
                rating_average: 5,
                review_count: 12,
                url_path: 'apple-iphone-14-p197214029.html?spid=197214041',
                quantity_sold: {
                  text: 'Đã bán 52',
                  value: 52,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 91,
                    icon_height: 16,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 24990000,
                impression_info: [
                  {
                    impression_id: 'd1245c24-d12e-4c5c-babc-ad812032318d',
                    metadata: {
                      product_id: 197214029,
                      service_name: 'reco',
                      version: 'similar_products_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 123554531,
                price: 29530000,
                discount_rate: 20,
                inventory_status: 'available',
                id: 184061913,
                name: 'Apple iPhone 13 Pro Max',
                list_price: 36990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/1b/26/17/34a3fbb4d6821f150a09aa035e9c3e6f.jpg',
                rating_average: 4.95,
                review_count: 1495,
                url_path:
                  'apple-iphone-13-pro-max-hang-chinh-hang-p184061913.html?spid=123554531',
                quantity_sold: {
                  text: 'Đã bán 1000+',
                  value: 8305,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 91,
                    icon_height: 16,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 36990000,
                impression_info: [
                  {
                    impression_id: 'f435f340-af6b-4961-ada2-86a293de01eb',
                    metadata: {
                      product_id: 184061913,
                      service_name: 'reco',
                      version: 'similar_products_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 168778791,
                price: 19100000,
                discount_rate: 24,
                inventory_status: 'available',
                id: 184059211,
                name: 'Apple iPhone 13',
                list_price: 24990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/c2/95/b0/405e3bc7267cd545c76fd6eb93fa6045.png',
                rating_average: 4.95,
                review_count: 1584,
                url_path:
                  'apple-iphone-13-hang-chinh-hang-p184059211.html?spid=168778791',
                quantity_sold: {
                  text: 'Đã bán 1000+',
                  value: 4371,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 91,
                    icon_height: 16,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 24990000,
                impression_info: [
                  {
                    impression_id: 'edbef8e5-5f29-4b82-bbad-a2a28402a04d',
                    metadata: {
                      product_id: 184059211,
                      service_name: 'reco',
                      version: 'similar_products_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 70766425,
                price: 14490000,
                discount_rate: 15,
                inventory_status: 'available',
                id: 123345348,
                name: 'Apple iPhone 12',
                list_price: 16990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/e0/c9/78/e028f9346e1922b0aadc750f272609c3.jpg',
                rating_average: 4.95,
                review_count: 1204,
                url_path:
                  'apple-iphone-12-hang-chinh-hang-p123345348.html?spid=70766425',
                quantity_sold: {
                  text: 'Đã bán 1000+',
                  value: 2620,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 91,
                    icon_height: 16,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 16990000,
                impression_info: [
                  {
                    impression_id: '1dba42d0-e121-4134-816c-47764ffd1f0f',
                    metadata: {
                      product_id: 123345348,
                      service_name: 'reco',
                      version: 'similar_products_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 168721273,
                price: 12780000,
                discount_rate: 12,
                inventory_status: 'available',
                id: 183243019,
                name: 'Apple iPhone SE 2022',
                list_price: 14490000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/a8/46/0b/3b902315c152bd3666258f85eb008d69.jpg',
                rating_average: 4.95,
                review_count: 36,
                url_path: 'apple-iphone-se-2022-p183243019.html?spid=168721273',
                quantity_sold: {
                  text: 'Đã bán 79',
                  value: 79,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 91,
                    icon_height: 16,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 14490000,
                impression_info: [
                  {
                    impression_id: '72078c87-ec36-47ac-98e0-535508b3ad45',
                    metadata: {
                      product_id: 183243019,
                      service_name: 'reco',
                      version: 'similar_products_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 32033719,
                price: 10890000,
                discount_rate: 16,
                inventory_status: 'available',
                id: 184036446,
                name: 'Apple iPhone 11',
                list_price: 12990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/aa/24/e0/57914989351786ef9dfe027046ba4626.jpg',
                rating_average: 4.8,
                review_count: 2667,
                url_path: 'apple-iphone-11-p184036446.html?spid=32033719',
                quantity_sold: {
                  text: 'Đã bán 1000+',
                  value: 10709,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 91,
                    icon_height: 16,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 12990000,
                impression_info: [
                  {
                    impression_id: 'd4b4014c-8198-416a-b113-2c8bd91f945e',
                    metadata: {
                      product_id: 184036446,
                      service_name: 'reco',
                      version: 'similar_products_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
            ],
            widgets: [],
            model_debug: {
              version: 'similar_products_v1_202210280600',
              exp_id: '',
              variant_id: '',
              match_key: '::::__197216279',
              lookup_ms: 1,
              rule_code: '',
              ad_code: '',
              widget_code: '',
              model_debug: [],
              rulebase_debug: [],
              ad_debug: [],
              realtime_debug: [],
              rule_codes: [],
              model_codes: [],
              ad_codes: [],
              widget_codes: [],
              realtime_codes: [],
              o: 0,
              ro: 0,
              ao: 0,
              wo: 0,
              rto: 0,
            },
            advertisement: null,
            item_id: '',
            image_ratio: 0,
            url: '',
            image: '',
          },
        ],
        pdp_bottom: [
          {
            code: 'maybe_you_like',
            placement: 'pdp_bottom',
            type: 'pdp_infinite_scroll',
            title: '',
            image_url:
              'https://salt.tikicdn.com/ts/upload/21/ba/27/02cf6c9f749be445cfb064087755d364.png',
            image_width: 194,
            image_height: 24,
            more_link:
              'https://tiki.vn/api/personalish/v2/pdp/blocks?mpid=197216279&offset=0&page_token=gHrfZJBrtSmcj5eTEUKfN4ImzlwBQqULMpIzKKfhFVg9EtkEIcTLAibrqLWpHpIewNE9CQTrA2C33RiUTdiWdoZHPoiipe9EYDFM9-hK7O8wsZ9HPdBm0G5g-A%3D%3D&spid=197216289&widget_only=maybe_you_like',
            items: [
              {
                default_spid: 124939769,
                price: 7990000,
                discount_rate: 27,
                inventory_status: 'available',
                id: 183330021,
                name: 'Apple iPad 10.2-inch (9th Gen) Wi-Fi, 2021',
                list_price: 10990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/54/ff/25/bfdf0febe11a28eaa7cd3fa735a82c49.png',
                rating_average: 4.95,
                review_count: 392,
                url_path:
                  'apple-ipad-10-2-inch-9th-gen-wi-fi-2021-p183330021.html?spid=124939769',
                quantity_sold: {
                  text: 'Đã bán 1000+',
                  value: 1191,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 10990000,
                impression_info: [
                  {
                    impression_id: '1e885dd9-7716-4d3e-a114-9ab9569af643',
                    metadata: {
                      product_id: 183330021,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 168721266,
                price: 14750000,
                discount_rate: 8,
                inventory_status: 'available',
                id: 184253251,
                name: 'Apple iPad Air (5th Gen) Wi-Fi, 2022 ',
                list_price: 15990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/42/0f/92/2f5a875401334239950b277660ccc79f.jpg',
                rating_average: 4.95,
                review_count: 82,
                url_path:
                  'apple-ipad-air-5th-gen-wi-fi-2022-p184253251.html?spid=168721266',
                quantity_sold: {
                  text: 'Đã bán 230',
                  value: 230,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 15990000,
                impression_info: [
                  {
                    impression_id: '22d4cc77-df7c-414f-a550-fc599d4ac49e',
                    metadata: {
                      product_id: 184253251,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 124944091,
                price: 12990000,
                discount_rate: 13,
                inventory_status: 'available',
                id: 184248127,
                name: 'Apple iPad mini (6th Gen) Wi-Fi, 2021',
                list_price: 14990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/70/e7/82/37fd62ed4c7a81f14f017fc890792474.jpg',
                rating_average: 4.95,
                review_count: 125,
                url_path:
                  'apple-ipad-mini-6th-gen-wi-fi-2021-hang-chinh-hang-p184248127.html?spid=124944091',
                quantity_sold: {
                  text: 'Đã bán 250',
                  value: 250,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 14990000,
                impression_info: [
                  {
                    impression_id: 'add9d9e7-dc90-4544-8dc8-010e1194fa04',
                    metadata: {
                      product_id: 184248127,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 97551083,
                price: 19000000,
                discount_rate: 17,
                inventory_status: 'available',
                id: 184294674,
                name: 'Apple iPad Pro 11- inch M1 Wi-Fi, 2021',
                list_price: 22990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/fa/e5/17/1b40fa371dd5d7f2d8c841246d95ebfb.png',
                rating_average: 4.95,
                review_count: 240,
                url_path:
                  'apple-ipad-pro-11-inch-m1-wi-fi-2021-p184294674.html?spid=97551083',
                quantity_sold: {
                  text: 'Đã bán 543',
                  value: 543,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 22990000,
                impression_info: [
                  {
                    impression_id: 'a3976fb2-9ef2-406d-80c8-295f38f08958',
                    metadata: {
                      product_id: 184294674,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 175194014,
                price: 6490000,
                discount_rate: 28,
                inventory_status: 'available',
                id: 175194008,
                name: 'Apple Watch SE GPS Sport Band (Viền Nhôm, Dây Cao Su)',
                list_price: 8990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/ba/32/3f/1f4957ea7e8ac07862235b8758503c69.jpg',
                rating_average: 4.8,
                review_count: 103,
                url_path:
                  'apple-watch-se-gps-sport-band-vien-nhom-day-cao-su-p175194008.html?spid=175194014',
                quantity_sold: {
                  text: 'Đã bán 249',
                  value: 249,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 8990000,
                impression_info: [
                  {
                    impression_id: '68b27894-1360-4e3a-a71e-807ada6e12c9',
                    metadata: {
                      product_id: 175194008,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 128678714,
                price: 9470000,
                discount_rate: 27,
                inventory_status: 'available',
                id: 128678712,
                name: 'Apple Watch Series 7 GPS Sport Band (Viền Nhôm, Dây Cao Su)',
                list_price: 12990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/83/7b/e3/76c7446282ade0045d69bae32f89733d.jpg',
                rating_average: 4.95,
                review_count: 288,
                url_path:
                  'apple-watch-series-7-gps-sport-band-vien-nhom-day-cao-su-p128678712.html?spid=128678714',
                quantity_sold: {
                  text: 'Đã bán 649',
                  value: 649,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 12990000,
                impression_info: [
                  {
                    impression_id: '690aa996-5b09-43cb-a9dd-596e3f783206',
                    metadata: {
                      product_id: 128678712,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 197674987,
                price: 11040000,
                discount_rate: 15,
                inventory_status: 'available',
                id: 197674971,
                name: 'Apple Watch Series 8 GPS Sport Band (Viền Nhôm, Dây Cao Su)',
                list_price: 12990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/8f/81/ef/b471364bdb7d62d268e53c04a741aab5.png',
                rating_average: 0,
                review_count: 0,
                url_path:
                  'apple-watch-series-8-gps-sport-band-vien-nhom-day-cao-su-p197674971.html?spid=197674987',
                quantity_sold: {
                  text: 'Đã bán 9',
                  value: 9,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 12990000,
                impression_info: [
                  {
                    impression_id: '37408d20-9e3f-4d23-b1d1-059366e2f077',
                    metadata: {
                      product_id: 197674971,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 140436675,
                price: 4790000,
                discount_rate: 39,
                inventory_status: 'available',
                id: 140436661,
                name: 'Apple AirPods Pro - MLWK3',
                list_price: 7790000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/11/cc/d5/904dc2051c8c655a352bbe8a44c5ea14.jpg',
                rating_average: 4.8,
                review_count: 659,
                url_path:
                  'apple-airpods-pro-mlwk3-p140436661.html?spid=140436675',
                quantity_sold: {
                  text: 'Đã bán 1000+',
                  value: 2178,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 7790000,
                impression_info: [
                  {
                    impression_id: '942e47ff-9944-4f99-b885-dd86a45920ce',
                    metadata: {
                      product_id: 140436661,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 136815381,
                price: 4490000,
                discount_rate: 31,
                inventory_status: 'available',
                id: 136815380,
                name: 'Apple AirPods 3 Hộp sạc Magsafe - MME73',
                list_price: 6490000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/6e/66/8d/6927934da95f5df607b1d4a79fb4d466.jpg',
                rating_average: 4.8,
                review_count: 758,
                url_path:
                  'apple-airpods-3-hop-sac-magsafe-mme73-p136815380.html?spid=136815381',
                quantity_sold: {
                  text: 'Đã bán 1000+',
                  value: 2208,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 6490000,
                impression_info: [
                  {
                    impression_id: 'cccd28fb-4b64-476f-a447-f2f52b170f33',
                    metadata: {
                      product_id: 136815380,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 12567799,
                price: 2750000,
                discount_rate: 49,
                inventory_status: 'available',
                id: 123838761,
                name: 'Apple AirPods 2 - Hộp Sạc Thường',
                list_price: 5390000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/da/2b/e2/75d75c875ecb62909be805b1a08b3d2d.png',
                rating_average: 4.8,
                review_count: 2256,
                url_path:
                  'apple-airpods-2-hop-sac-thuong-p123838761.html?spid=12567799',
                quantity_sold: {
                  text: 'Đã bán 1000+',
                  value: 8762,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 5390000,
                impression_info: [
                  {
                    impression_id: '91b40c6d-a918-40a7-a4c7-875fcd08f09c',
                    metadata: {
                      product_id: 123838761,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 197665886,
                price: 4760000,
                discount_rate: 12,
                inventory_status: 'available',
                id: 197665885,
                name: 'Apple AirPods 3 2022 sạc Lightning - MPNY3',
                list_price: 5390000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/e2/79/3a/99fb3f8dd32c331e6535e5aae5d51f98.jpg',
                rating_average: 5,
                review_count: 1,
                url_path:
                  'apple-airpods-3-2022-sac-lightning-mpny3-p197665885.html?spid=197665886',
                quantity_sold: {
                  text: 'Đã bán 5',
                  value: 5,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 5390000,
                impression_info: [
                  {
                    impression_id: 'a9b283a0-cf91-433a-8b53-e28621bd474f',
                    metadata: {
                      product_id: 197665885,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 68171131,
                price: 13490000,
                discount_rate: 16,
                inventory_status: 'available',
                id: 184287364,
                name: 'Apple iPad Air (4th Gen) Wi-Fi, 2020',
                list_price: 15990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/95/29/bb/c35ed97f904ead0ee4fd5289551e722d.jpg',
                rating_average: 4.8,
                review_count: 570,
                url_path:
                  'apple-ipad-air-4th-gen-wi-fi-2020-p184287364.html?spid=68171131',
                quantity_sold: {
                  text: 'Đã bán 1000+',
                  value: 1120,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 15990000,
                impression_info: [
                  {
                    impression_id: '06912dd6-daba-4fd9-9a94-0147b31d4955',
                    metadata: {
                      product_id: 184287364,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 197674964,
                price: 6990000,
                discount_rate: 13,
                inventory_status: 'available',
                id: 197674960,
                name: 'Apple Watch SE 2022 GPS Sport Band (Viền Nhôm, Dây Cao Su)',
                list_price: 7990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/ab/8d/b4/42549218027270341ff98b29c5aadeff.png',
                rating_average: 5,
                review_count: 1,
                url_path:
                  'apple-watch-se-2022-gps-sport-band-vien-nhom-day-cao-su-p197674960.html?spid=197674964',
                quantity_sold: {
                  text: 'Đã bán 7',
                  value: 7,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 7990000,
                impression_info: [
                  {
                    impression_id: 'fee136ba-e2e0-4a51-8a02-dd4beda61780',
                    metadata: {
                      product_id: 197674960,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 68088762,
                price: 7490000,
                discount_rate: 32,
                inventory_status: 'available',
                id: 123858614,
                name: 'Apple Watch Series 6 GPS Sport Band (Viền Nhôm, Dây Cao Su)',
                list_price: 10990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/35/6e/9e/04b8e20dc375cb00856aa52c85958733.jpg',
                rating_average: 4.8,
                review_count: 579,
                url_path:
                  'apple-watch-series-6-gps-sport-band-vien-nhom-day-cao-su-p123858614.html?spid=68088762',
                quantity_sold: {
                  text: 'Đã bán 1000+',
                  value: 1215,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 10990000,
                impression_info: [
                  {
                    impression_id: 'f22aad8a-e297-45f5-b699-c4bae30035bf',
                    metadata: {
                      product_id: 123858614,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 7817453,
                price: 4590000,
                discount_rate: 34,
                inventory_status: 'available',
                id: 123840212,
                name: 'Apple Watch Series 3 GPS Sport Band (Viền Nhôm, Dây Cao Su)',
                list_price: 6990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/b2/0d/a8/4bcc99a1b3ada8856b2aa122c03b17bc.jpg',
                rating_average: 4.8,
                review_count: 426,
                url_path:
                  'apple-watch-series-3-gps-sport-band-vien-nhom-day-cao-su-p123840212.html?spid=7817453',
                quantity_sold: {
                  text: 'Đã bán 1000+',
                  value: 1306,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 6990000,
                impression_info: [
                  {
                    impression_id: '4b75aee3-0fde-4615-b222-f38e7803f312',
                    metadata: {
                      product_id: 123840212,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 197666215,
                price: 8990000,
                discount_rate: 18,
                inventory_status: 'available',
                id: 197666205,
                name: 'Apple Watch SE 2022 GPS + Cellular Sport Band (Viền Nhôm, Dây Cao Su)',
                list_price: 10990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/c7/33/a4/9cd8dfd592ddda73d97a3b185fb9c3cc.png',
                rating_average: 0,
                review_count: 0,
                url_path:
                  'apple-watch-se-2022-gps-cellular-sport-band-vien-nhom-day-cao-su-p197666205.html?spid=197666215',
                quantity_sold: {
                  text: 'Đã bán 1',
                  value: 1,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 10990000,
                impression_info: [
                  {
                    impression_id: '9319e43e-5acc-4e59-85ee-73b9bb471c31',
                    metadata: {
                      product_id: 197666205,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 197666224,
                price: 13990000,
                discount_rate: 7,
                inventory_status: 'available',
                id: 197666218,
                name: 'Apple Watch Series 8 GPS + Cellular Sport Band (Viền Nhôm, Dây Cao Su)',
                list_price: 14990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/58/8d/f1/38f2b035cd1ea5657d6bed69e82603dc.png',
                rating_average: 0,
                review_count: 0,
                url_path:
                  'apple-watch-series-8-gps-cellular-aluminium-case-with-midnight-sport-band-p197666218.html?spid=197666224',
                quantity_sold: {
                  text: '',
                  value: 0,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 14990000,
                impression_info: [
                  {
                    impression_id: '23bf49c8-1c7f-4304-93bb-f188ac5ea9de',
                    metadata: {
                      product_id: 197666218,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
              {
                default_spid: 71896011,
                price: 16890000,
                discount_rate: 16,
                inventory_status: 'available',
                id: 71896003,
                name: 'Apple Watch Series 6 LTE GPS + Cellular (Viền Thép, Dây Thép)',
                list_price: 19990000,
                type: 'simple',
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/media/catalog/product/tmp/4d/8f/83/f378ee0b8a3716798a8a41d1c45582c4.jpg',
                rating_average: 5,
                review_count: 69,
                url_path:
                  'apple-watch-series-6-lte-gps-cellular-vien-thep-day-thep-p71896003.html?spid=71896011',
                quantity_sold: {
                  text: 'Đã bán 135',
                  value: 135,
                },
                badges_new: [
                  {
                    placement: 'bottom',
                    code: 'freeship_tikifast',
                    type: 'icon_badge',
                    icon: 'https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png',
                    icon_width: 136,
                    icon_height: 24,
                    text: '',
                    text_color: '',
                    background_color: '',
                    suffix_icon: '',
                  },
                ],
                original_price: 19990000,
                impression_info: [
                  {
                    impression_id: 'e69b7589-3089-4c77-9862-cb7650350923',
                    metadata: {
                      product_id: 71896003,
                      service_name: 'reco',
                      version: 'pdp_product_discover_v1_202210280600',
                    },
                  },
                ],
                advertisement: null,
              },
            ],
            widgets: [],
            model_debug: {
              version: 'pdp_product_discover_v1_202210280600',
              exp_id: '',
              variant_id: '',
              match_key: '::::__197216279',
              lookup_ms: 1,
              rule_code: '',
              ad_code: '',
              widget_code: '',
              model_debug: [],
              rulebase_debug: [],
              ad_debug: [],
              realtime_debug: [],
              rule_codes: [],
              model_codes: [],
              ad_codes: [],
              widget_codes: [],
              realtime_codes: [],
              o: 0,
              ro: 0,
              ao: 0,
              wo: 0,
              rto: 0,
            },
            advertisement: null,
            item_id: '',
            image_ratio: 0,
            url: '',
            image: '',
          },
        ],
        pdp_in_add_to_cart: [
          {
            code: 'frequently_bought_together',
            placement: 'pdp_in_add_to_cart',
            type: 'items_without_tabs',
            title: 'Thường Được Mua Cùng',
            image_url: '',
            image_width: 0,
            image_height: 0,
            more_link: null,
            items: [],
            widgets: [],
            model_debug: {
              version: 'pdp_bougth_together_v1_202210280600',
              exp_id: '',
              variant_id: '',
              match_key: ':',
              lookup_ms: 0,
              rule_code: '',
              ad_code: '',
              widget_code: '',
              model_debug: [],
              rulebase_debug: [],
              ad_debug: [],
              realtime_debug: [],
              rule_codes: [],
              model_codes: [],
              ad_codes: [],
              widget_codes: [],
              realtime_codes: [],
              o: 0,
              ro: 0,
              ao: 0,
              wo: 0,
              rto: 0,
            },
            advertisement: null,
            item_id: '',
            image_ratio: 0,
            url: '',
            image: '',
          },
        ],
      },
      isLoadedWidgets: false,
      asaCouponData: {
        asa_balance: 8.470775,
        asa_balance_format: '8,47',
        asa_hunt_link: 'https://tiki.vn/sep/san-asa',
        coupon_asa: {
          coupons: {
            items: [
              {
                badges: null,
                countdown: {
                  text: '',
                  to: 0,
                },
                coupon_id: 3008,
                coupon_label: 'Đơn từ 199k',
                coupon_price: 176.51219186378634,
                description:
                  '<p>Số lượt đổi mã/ngày của 1 khách hàng: 1</p><p>Không áp dụng cho các đơn hàng Thanh toán hóa đơn, Topup - Sim số - Thẻ cào - Thẻ game, Phiếu quà tặng, Voucher Giftpop, Urbox, Kho Tiện Ích, Sữa cho bé dưới 24 tháng</p><p>Áp dụng tất cả hình thức thanh toán</p><p>Áp dụng cho tài khoản đã đổi mã giảm giá, không áp dụng cho tài khoản khác</p>',
                discount_value: 50000,
                granted: 76,
                icon_url:
                  'https://salt.tikicdn.com/ts/ta/01/8f/3b/746e076ed35d02db5797a6445592194e.png',
                id: 'd9aMUWD7DXfr',
                is_available: true,
                is_fixed: false,
                label: 'Đơn từ 199k',
                message: 'Đã đổi 76/120',
                minimum_order_value: 199000,
                name: 'Giảm 50k',
                price: 176,
                price_string: '177',
                progress_text: 'Đã đổi 63%',
                sale_rule_id: 3044492,
                stock: 120,
                tags: [],
                tiki_xu: '50000',
                using_valid_to: '2022-11-30 23:59:59',
                value: 'mã giảm giá 50k',
              },
              {
                badges: null,
                countdown: {
                  text: '',
                  to: 0,
                },
                coupon_id: 3001,
                coupon_label: 'Đơn từ 149k',
                coupon_price: 105.9073151182718,
                description:
                  '<p>Số lượt đổi mã/ngày của 1 khách hàng: 1</p><p>Không áp dụng cho các đơn hàng Thanh toán hóa đơn, Topup - Sim số - Thẻ cào - Thẻ game, Phiếu quà tặng, Voucher Giftpop, Urbox, Kho Tiện Ích, Sữa cho bé dưới 24 tháng</p><p>Áp dụng tất cả hình thức thanh toán</p><p>Áp dụng cho tài khoản đã đổi mã giảm giá, không áp dụng cho tài khoản khác</p>',
                discount_value: 30000,
                granted: 73,
                icon_url:
                  'https://salt.tikicdn.com/ts/ta/01/8f/3b/746e076ed35d02db5797a6445592194e.png',
                id: 'JMXvfO747bfV',
                is_available: true,
                is_fixed: false,
                label: 'Đơn từ 149k',
                message: 'Đã đổi 73/150',
                minimum_order_value: 149000,
                name: 'Giảm 30k',
                price: 105,
                price_string: '106',
                progress_text: 'Đã đổi 48%',
                sale_rule_id: 3044487,
                stock: 150,
                tags: [],
                tiki_xu: '30000',
                using_valid_to: '2022-11-30 23:59:59',
                value: 'mã giảm giá 30k',
              },
              {
                badges: null,
                countdown: {
                  text: 'Vui lòng quay lại sau',
                  to: 1667062799,
                },
                coupon_id: 3036,
                coupon_label: 'Đơn từ 5tr',
                coupon_price: 1765.30146309971,
                description:
                  '<p>Số lượt đổi mã/ngày của 1 khách hàng: 1</p><p>Không áp dụng cho các đơn hàng Thanh toán hóa đơn, Topup - Sim số - Thẻ cào - Thẻ game, Phiếu quà tặng, Voucher Giftpop, Urbox, Kho Tiện Ích, Sữa cho bé dưới 24 tháng</p><p>Áp dụng tất cả hình thức thanh toán</p><p>Áp dụng cho tài khoản đã đổi mã giảm giá, không áp dụng cho tài khoản khác</p>',
                discount_value: 500000,
                granted: 2,
                icon_url:
                  'https://salt.tikicdn.com/ts/ta/01/8f/3b/746e076ed35d02db5797a6445592194e.png',
                id: 'lXMLUmVbV0iy',
                is_available: true,
                is_fixed: false,
                is_oos: true,
                label: 'Đơn từ 5tr',
                minimum_order_value: 5000000,
                name: 'Giảm 500k',
                price: 1765,
                price_string: '1.765',
                sale_rule_id: 3044523,
                stock: 2,
                tags: [],
                tiki_xu: '500000',
                using_valid_to: '2022-11-30 23:59:59',
                value: 'mã giảm giá 500k',
              },
              {
                badges: null,
                countdown: {
                  text: 'Vui lòng quay lại sau',
                  to: 1667062799,
                },
                coupon_id: 3029,
                coupon_label: 'Đơn từ 1.5tr',
                coupon_price: 705.786488685302,
                description:
                  '<p>Số lượt đổi mã/ngày của 1 khách hàng: 1</p><p>Không áp dụng cho các đơn hàng Thanh toán hóa đơn, Topup - Sim số - Thẻ cào - Thẻ game, Phiếu quà tặng, Voucher Giftpop, Urbox, Kho Tiện Ích, Sữa cho bé dưới 24 tháng</p><p>Áp dụng tất cả hình thức thanh toán</p><p>Áp dụng cho tài khoản đã đổi mã giảm giá, không áp dụng cho tài khoản khác</p>',
                discount_value: 200000,
                granted: 5,
                icon_url:
                  'https://salt.tikicdn.com/ts/ta/01/8f/3b/746e076ed35d02db5797a6445592194e.png',
                id: 'E59MsnLkLjSB',
                is_available: true,
                is_fixed: false,
                is_oos: true,
                label: 'Đơn từ 1.5tr',
                minimum_order_value: 1500000,
                name: 'Giảm 200k',
                price: 705,
                price_string: '706',
                sale_rule_id: 3044516,
                stock: 5,
                tags: [],
                tiki_xu: '200000',
                using_valid_to: '2022-11-30 23:59:59',
                value: 'mã giảm giá 200k',
              },
              {
                badges: null,
                countdown: {
                  text: 'Vui lòng quay lại sau',
                  to: 1667062799,
                },
                coupon_id: 3022,
                coupon_label: 'Đơn từ 600k',
                coupon_price: 352.87253465810096,
                description:
                  '<p>Số lượt đổi mã/ngày của 1 khách hàng: 1</p><p>Không áp dụng cho các đơn hàng Thanh toán hóa đơn, Topup - Sim số - Thẻ cào - Thẻ game, Phiếu quà tặng, Voucher Giftpop, Urbox, Kho Tiện Ích, Sữa cho bé dưới 24 tháng</p><p>Áp dụng tất cả hình thức thanh toán</p><p>Áp dụng cho tài khoản đã đổi mã giảm giá, không áp dụng cho tài khoản khác</p>',
                discount_value: 100000,
                granted: 10,
                icon_url:
                  'https://salt.tikicdn.com/ts/ta/01/8f/3b/746e076ed35d02db5797a6445592194e.png',
                id: 'aB7au4373LfP',
                is_available: true,
                is_fixed: false,
                is_oos: true,
                label: 'Đơn từ 600k',
                minimum_order_value: 600000,
                name: 'Giảm 100k',
                price: 352,
                price_string: '353',
                sale_rule_id: 3044510,
                stock: 10,
                tags: [],
                tiki_xu: '100000',
                using_valid_to: '2022-11-30 23:59:59',
                value: 'mã giảm giá 100k',
              },
              {
                badges: null,
                countdown: {
                  text: 'Vui lòng quay lại sau',
                  to: 1667062799,
                },
                coupon_id: 3015,
                coupon_label: 'Đơn từ 249k',
                coupon_price: 247.11491017533362,
                description:
                  '<p>Số lượt đổi mã/ngày của 1 khách hàng: 1</p><p>Không áp dụng cho các đơn hàng Thanh toán hóa đơn, Topup - Sim số - Thẻ cào - Thẻ game, Phiếu quà tặng, Voucher Giftpop, Urbox, Kho Tiện Ích, Sữa cho bé dưới 24 tháng</p><p>Áp dụng tất cả hình thức thanh toán</p><p>Áp dụng cho tài khoản đã đổi mã giảm giá, không áp dụng cho tài khoản khác</p>',
                discount_value: 70000,
                granted: 100,
                icon_url:
                  'https://salt.tikicdn.com/ts/ta/01/8f/3b/746e076ed35d02db5797a6445592194e.png',
                id: '9ayLsZ2V2JCv',
                is_available: true,
                is_fixed: false,
                is_oos: true,
                label: 'Đơn từ 249k',
                minimum_order_value: 249000,
                name: 'Giảm 70k',
                price: 247,
                price_string: '247',
                sale_rule_id: 3044501,
                stock: 100,
                tags: [],
                tiki_xu: '70000',
                using_valid_to: '2022-11-30 23:59:59',
                value: 'mã giảm giá 70k',
              },
            ],
          },
          exchange_rate: 311,
          seconds_remain: 25,
          total_items: 6,
        },
        coupon_label: ['Giảm 50k', 'Giảm 1 triệu'],
        coupon_listing_title: 'Đổi Astra lấy gói thành viên và mã giảm giá',
        coupon_normal: {
          data: [
            {
              app_url: null,
              coupon_code: 'MOCAIP14',
              coupon_id: 63935467,
              coupon_type: 'MOCA_COUPON',
              discount_amount: 1000000,
              expired_at: 1672505999,
              icon_name: 'Ví Moca',
              icon_url:
                'https://salt.tikicdn.com/cache/128x128/ts/upload/a8/e1/32/f231d8edf0241c00efdda571bbc0c962.jpg',
              label: 'Giảm 1 triệu',
              long_description:
                'Giảm 1 triệu cho đơn hàng từ 20 triệu khi thanh toán Ví Moca.\nÁp dụng cho iPhone 14 series thuộc nhà bán Tiki Trading.\nChỉ áp dụng khi mua hàng trên Tiki Mobile App.\nMỗi khách hàng được sử dụng tối đa 1 lần.',
              min_amount: 20000000,
              out_of_stock: false,
              payment: null,
              period: 'HSD: 31/12/22',
              rule_id: 3035708,
              saved: false,
              seller_id: 0,
              seller_name: null,
              short_description: 'Cho đơn hàng từ 20 triệu',
              short_title: 'Giảm 1 triệu',
              simple_action: 'cart_fixed',
              status: 'active',
              tags: ['Chỉ cho App'],
              url: 'https://tiki.vn/khuyen-mai/moca-grab-tiki',
              web_url: null,
            },
            {
              app_url: null,
              coupon_code: 'MOCA21025',
              coupon_id: 63695246,
              coupon_type: 'MOCA_COUPON',
              discount_amount: 25000,
              expired_at: 1667235599,
              icon_name: 'Ví Moca',
              icon_url:
                'https://salt.tikicdn.com/cache/128x128/ts/upload/a8/e1/32/f231d8edf0241c00efdda571bbc0c962.jpg',
              label: 'Giảm 25K',
              long_description:
                'Giảm 25K cho đơn hàng từ 350K.\nKhông áp dụng cho các sản phẩm trong danh mục Sữa cho bé dưới 24 tháng , Phiếu quà tặng, Quảng cáo Tiki Ads, Sản phẩm dịch vụ số, Tini App, Sim số - Thẻ cào - Thẻ game, Tini App SD, Mã Phiếu Quà Tặng Tiki, Rượu từ 15%.\nKhông áp dụng cho 1 số nhà bán.\nChỉ áp dụng khi mua hàng trên Tiki Mobile App.\nMỗi khách hàng được sử dụng tối đa 1 lần.\nKhông áp dụng cho trả góp.',
              min_amount: 350000,
              out_of_stock: false,
              payment: null,
              period: 'HSD: 31/10/22',
              rule_id: 3024234,
              saved: true,
              seller_id: 0,
              seller_name: null,
              short_description: 'Cho đơn hàng từ 350K',
              short_title: 'Giảm 25K',
              simple_action: 'cart_fixed',
              status: 'active',
              tags: ['Chỉ cho App'],
              url: 'https://tiki.vn/khuyen-mai/moca-grab-tiki',
              web_url: null,
            },
          ],
          labels: ['Giảm 1 triệu', 'Giảm 25K'],
          log: '{"brand_id":17827,"sku":"6796201740668","price":31990000,"seller_id":1,"customer_group_id":8,"qty":1,"category_ids":[1795,2,1789],"shipping_plans":["STANDARD"],"customer_id":8731995}',
          text: '2 Mã Giảm Giá',
          version: 1,
        },
        coupon_qty: '6 Mã Giảm Giá',
        customer_id: 8731995,
        icon: 'https://salt.tikicdn.com/ts/upload/84/92/b1/aa02db3d9035080875d9d045f6ba92e8.png',
        promo_pack: {
          level: 1,
          icon: 'https://salt.tikicdn.com/ts/ta/4f/62/46/429af1fd30314babb4c1d3d861f8799a.png',
          name: 'Gói Đồng',
          bg: 'https://salt.tikicdn.com/ts/ta/b0/4b/78/98b2be827d5d7608d4d61346dac5e95c.png',
          bg_detail:
            'https://salt.tikicdn.com/ts/ta/90/3e/20/be079ea5f9eed0e7e97f6870907d117c.png',
          bg_web:
            'https://salt.tikicdn.com/ts/ta/b0/4b/78/03d7fda4a89eaefa424cea9a8f7d4b9c.png',
          bg_detail_web:
            'https://salt.tikicdn.com/ts/ta/90/3e/20/be079ea5f9eed0e7e97f6870907d117c.png',
          asa_price: 10,
          expired_at: '29/04/2023',
          in_expired_at: '',
          package_type: 'Đồng',
          offers: [
            {
              icon: 'https://salt.tikicdn.com/ts/ta/5e/81/95/887c12dd8317ef30b3d1ceff1fb1353a.png',
              content:
                '<b><span style="color:#38383D;">Thưởng tới 11 ASA</span></b> (≈ 3,41k ₫) mỗi 100k chi tiêu',
            },
            {
              icon: 'https://salt.tikicdn.com/ts/ta/5e/81/95/887c12dd8317ef30b3d1ceff1fb1353a.png',
              content:
                '<b><span style="color:#38383D;">Tặng gói mã 60k</span></b> gồm 6 mã freeship',
            },
            {
              icon: 'https://salt.tikicdn.com/ts/ta/5e/81/95/887c12dd8317ef30b3d1ceff1fb1353a.png',
              content:
                '<b><span style="color:#38383D;">6 tháng</span></b> hưởng đặc quyền',
            },
          ],
          cta: {
            url: 'https://tiki.vn/sep/gia-han-nang-hang?level=1',
            url_web: 'https://tiki.vn/sep/gia-han-nang-hang?level=1',
            text: 'Đổi 10 ASA',
            is_purchased: false,
          },
          upgrade_info: {
            icon: '',
            title: 'Bạn không có đủ ASA',
            text: 'Săn thêm ASA để thăng hạng',
            button_text: 'Ok, đã hiểu',
            can_upgrade: false,
            payload: {
              level: 1,
              asa_price: 10,
              is_promo: false,
            },
          },
          is_has_package: true,
          badge: {
            background_color: '#FF7A00',
            content: 'Dành cho bạn',
            text_color: '#FFFFFF',
          },
          popup_information: {
            btn: {
              text: 'Ok, đã hiểu',
              url: '',
            },
            can_upgrade: false,
            description: 'Săn thêm ASA để thăng hạng',
            icon_url:
              'https://salt.tikicdn.com/ts/upload/2c/09/f4/868cfbb0d37aaa6779b75d3a3d005a72.png',
            is_enough_asa: false,
            level: 1,
            popup_name: 'Bạn không có đủ ASA',
            title_popup: {
              price: null,
              text: 'Bạn không có đủ ASA',
            },
            top_image:
              'https://salt.tikicdn.com/ts/upload/3b/93/d3/b377993b58e956906390c38ab2da9501.png',
          },
          detail_cta: {
            text: '',
            url: 'https://tiki.vn/astra-rewards/home',
            url_web: 'https://tiki.vn/astra-rewards/home',
          },
        },
        sep_required: {
          header_title: 'Điều kiện đổi coupon chưa phù hợp',
          header_sub_title: 'Gói thành viên ASTRA REWARDS',
          title: 'Bạn chưa thể đổi được mã giảm giá này',
          sub_title: 'Vui lòng xem điều kiện trong chi tiết mã',
          list: [
            {
              text: '<b>Mua hàng thưởng điểm Astra</b>, hạng thành viên càng cao thưởng càng nhiều',
              icon: 'https://salt.tikicdn.com/ts/upload/76/23/0d/b559912372946d6d6c2eeda477c301d1.png',
            },
            {
              text: '<b>Nhận ngay gói mã giảm giá và freeship đến 900k</b> khi đăng ký gói',
              icon: 'https://salt.tikicdn.com/ts/upload/76/23/0d/b559912372946d6d6c2eeda477c301d1.png',
            },
            {
              text: 'Và nhiều quyền lợi khác trong <b>6 tháng</b>',
              icon: 'https://salt.tikicdn.com/ts/upload/76/23/0d/b559912372946d6d6c2eeda477c301d1.png',
            },
          ],
          btn: [
            {
              text: 'Tìm hiểu thêm',
              link: 'https://tiki.vn/astra-rewards/gioi-thieu',
            },
            {
              text: 'Xem các gói',
              link: 'https://tiki.vn/astra-rewards/package-list',
            },
          ],
        },
        text: 'Astra bạn đang có:',
        firstLoaded: true,
      },
      isUpdate: false,
      flashSwapCoupon: {},
      isNotFoundProductDetailClient: false,
      productType: 'NORMAL',
      configurableSelected: {
        child_id: 197216295,
        id: 197216297,
        images: [
          {
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
            medium_url:
              'https://salt.tikicdn.com/cache/550x550/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
          },
          {
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/550x550/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
          },
          {
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/550x550/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
          },
          {
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/550x550/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
          },
          {
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/550x550/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
          },
          {
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/550x550/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
          },
          {
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/550x550/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
          },
          {
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/550x550/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
          },
          {
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/550x550/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
          },
          {
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/550x550/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
          },
        ],
        inventory_status: 'available',
        name: 'Apple iPhone 14 Pro 256GB Tím',
        option1: 'Tím',
        option2: '256GB',
        price: 32990000,
        selected: true,
        seller: {
          id: 1,
          name: 'Tiki Trading',
        },
        sku: '4974300659459',
        thumbnail_url:
          'https://salt.tikicdn.com/cache/280x280/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
      },
      productImages: [
        {
          photoForCustomer: false,
          image: {
            base_url:
              'https://salt.tikicdn.com/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
          },
        },
        {
          photoForCustomer: false,
          image: {
            base_url:
              'https://salt.tikicdn.com/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/de/53/30/85eed5cb46492ad8d04f1a11159041d5.jpg',
          },
        },
        {
          photoForCustomer: false,
          image: {
            base_url:
              'https://salt.tikicdn.com/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/b0/27/f8/5a6c2b1a914cd1fae96afcc0d1e43cc1.jpg',
          },
        },
        {
          photoForCustomer: false,
          image: {
            base_url:
              'https://salt.tikicdn.com/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/d3/bd/4c/2869fd55a1ff798ad0ad48e50b2c7f39.jpg',
          },
        },
        {
          photoForCustomer: false,
          image: {
            base_url:
              'https://salt.tikicdn.com/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/24/df/c4/710259a0c31eb92775da1f35c8c52bef.jpg',
          },
        },
        {
          photoForCustomer: false,
          image: {
            base_url:
              'https://salt.tikicdn.com/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/53/42/3b/6729e1ed8b81690e116e7773cfb25681.jpg',
          },
        },
        {
          photoForCustomer: false,
          image: {
            base_url:
              'https://salt.tikicdn.com/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/e9/58/9e/fc2fe28072c5f0e7ba35ca9f71df5b85.jpg',
          },
        },
        {
          photoForCustomer: false,
          image: {
            base_url:
              'https://salt.tikicdn.com/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/b5/8e/fc/8fe605a2d883bdea662fb4d1cc5418e3.jpg',
          },
        },
        {
          photoForCustomer: false,
          image: {
            base_url:
              'https://salt.tikicdn.com/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/aa/db/c7/76df17c6b401081efc9114b53a7b0fd1.jpg',
          },
        },
        {
          photoForCustomer: false,
          image: {
            base_url:
              'https://salt.tikicdn.com/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
            is_gallery: true,
            label: null,
            large_url:
              'https://salt.tikicdn.com/cache/w1200/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
            medium_url:
              'https://salt.tikicdn.com/cache/w300/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
            position: null,
            small_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
            thumbnail_url:
              'https://salt.tikicdn.com/cache/200x280/ts/product/70/43/3e/22331f904b882e3d208578c84b92af4b.jpg',
          },
        },
      ],
      reviewData: {
        stars: {
          '1': {
            count: 0,
            percent: 0,
          },
          '2': {
            count: 0,
            percent: 0,
          },
          '3': {
            count: 1,
            percent: 1,
          },
          '4': {
            count: 1,
            percent: 2,
          },
          '5': {
            count: 61,
            percent: 97,
          },
        },
        rating_average: 5,
        reviews_count: 63,
        review_photo: {
          total: 30,
          total_photo: 43,
        },
        data: [
          {
            id: 17958526,
            title: 'Cực kì hài lòng',
            content:
              'Hôm qua rất may mắn mình đã đặt được màu yêu thích và add mã giảm mua được giá khá là rẻ so với thị trường. Hôm qua lúc mình mua là gần 1h sáng vì nghĩ chắc hết suất giao sớm rồi và hoàn thành đơn Tiki hẹn 21-10 trả máy... Nhưng điều bất ngờ xảy ra, hôm nay Tiki giao cho mình luôn, quá tuyệt vời, anh shipper rất nhiệt tình chờ vì mình không biết đơn giao. Đã 3 lần săn deal trên Tiki, ip11 promax , ip13 và giờ ip14 pro. Rất tin tưởng, TiKi mãi đỉnh...., sẽ luôn ủng hộ Tiki. Cảm ơn',
            status: 'approved',
            thank_count: 11,
            score: 0.34090909,
            new_score: 0.14760412,
            customer_id: 23381998,
            comment_count: 7,
            rating: 5,
            images: [
              {
                id: 3935884,
                full_path:
                  'https://salt.tikicdn.com/ts/review/14/1d/7b/b641eb8ada19690eb15f4f74255eb117.jpg',
                status: 'approved',
              },
              {
                id: 3935885,
                full_path:
                  'https://salt.tikicdn.com/ts/review/3b/44/69/6b249d3f6e7a34cac8daa37595bd5bfd.jpg',
                status: 'approved',
              },
              {
                id: 3935886,
                full_path:
                  'https://salt.tikicdn.com/ts/review/eb/c0/df/acb5b2b0e065a24f0ad65ee51970f423.jpg',
                status: 'approved',
              },
              {
                id: 3935887,
                full_path:
                  'https://salt.tikicdn.com/ts/review/d7/1d/de/3947a2274b27a2d4f52fcfd33827a887.jpg',
                status: 'approved',
              },
              {
                id: 3935888,
                full_path:
                  'https://salt.tikicdn.com/ts/review/bb/a0/3c/9134d1dc9e9a069f861826b2aa731b91.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1665744789,
            created_by: {
              id: 23381998,
              name: 'Hằng Nguyễn',
              full_name: 'Hằng Nguyễn',
              region: null,
              avatar_url: '//tiki.vn/assets/img/avatar.png',
              created_time: '2021-09-03 20:41:30',
              group_id: 8,
              purchased: true,
              purchased_at: 1665682542,
              contribute_info: {
                id: 23381998,
                name: 'Hằng Nguyễn',
                avatar: '//tiki.vn/assets/img/avatar.png',
                summary: {
                  joined_time: 'Đã tham gia 1 năm',
                  total_review: 3,
                  total_thank: 11,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Bạc',
              'Dung lượng 128GB',
            ],
            product_attributes: ['Màu: Bạc', 'Dung lượng: 128GB'],
            spid: 197216283,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-14 17:53:09',
              delivery_date: '2022-10-14 15:19:30',
              current_date: '2022-10-29 17:03:12',
              content: 'Đã dùng 3 giờ',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 3 giờ.',
            },
            comments: [
              {
                id: 2720886,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 8935147,
                fullname: 'Duy Truong',
                avatar_url:
                  'https://lh4.googleusercontent.com/-_apcjRWUW9s/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbALN5Mv15pharCLc6AtTlOHIgb-Bg/mo/photo.jpg',
                content: 'Ban mua gia săn sale la nhiu bạn ?',
                score: 0,
                create_at: 1666618643,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2717286,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 1231716,
                fullname: 'Như Phong',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content: 'iphone của Tiki Trading auto 100% VNA nhé',
                score: 0,
                create_at: 1666394268,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2707933,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 22165542,
                fullname: 'LÊ PHƯỚC TÀI',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content: 'Bạn đó có chụp ảnh sau lưng hộp đó mã VN/A',
                score: 0,
                create_at: 1665914456,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2707803,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 11508570,
                fullname: 'Anh Tuấn',
                avatar_url:
                  'https://s120.avatar.talk.zdn.vn/e/d/6/4/1/120/9c7b4e608a61ab53897c263bb6202401.jpg',
                content: 'Tiki Trading auto VN/A',
                score: 0,
                create_at: 1665905748,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2707487,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 1635513,
                fullname: 'Nguyễn Công Khanh',
                avatar_url:
                  'https://salt.tikicdn.com/cache/512x512/ts/avatar/49/ed/4b/800389c818f48cf646264d86c254724e.png',
                content:
                  'Bán hàng xách tay để bị Apple phạt hay gì? :))) có thế cũng hỏi',
                score: 0,
                create_at: 1665851228,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2706204,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 1702769,
                fullname: 'Ngo Le Ngoc Bich',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content:
                  'Không thấy ghi bảo hành chính hãng VN/A nên cũng hơi ngại, ai trả lời giúp mình với ạ',
                score: 0,
                create_at: 1665764056,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2706043,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 8828075,
                fullname: 'Trang Nguyen',
                avatar_url:
                  'https://s120.avatar.talk.zdn.vn/9/1/2/e/8/120/ad265d62b12e686135495fb2ec552456.jpg',
                content: 'Máy của Tiki là mã VN hết hả bạn ơi ?',
                score: 0,
                create_at: 1665750280,
                badge: '',
                status: 2,
                is_reported: false,
              },
            ],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 17962848,
            title: 'Cực kì hài lòng',
            content:
              'Giao cực nhanh. Vừa lên hàng mình đặt luôn chưa đầy 1 phút thì hết nên ông nào nhanh tay thì được thật. Nhận máy vào ngày mở bán cảm giác thích hẳn. Ở nhà chờ shipper đến ko phải thức đêm hay chạy đi nhận máy. Seal tự bóc, ko phải kích hoạt tại chỗ như một số chỗ. Thanh toán nhanh gọn. Tiki mãi đỉnh🫰',
            status: 'approved',
            thank_count: 7,
            score: 0.26498538,
            new_score: 0.13841551,
            customer_id: 1757100,
            comment_count: 0,
            rating: 5,
            images: [
              {
                id: 3936820,
                full_path:
                  'https://salt.tikicdn.com/ts/review/b6/04/a6/21199b81a3e262c5485ed4e8f539e57f.jpg',
                status: 'approved',
              },
              {
                id: 3936821,
                full_path:
                  'https://salt.tikicdn.com/ts/review/2e/6e/61/dc4d430a9d2278cec388210ed2ae2e86.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1665801892,
            created_by: {
              id: 1757100,
              name: 'Nguyễn Trường Giang',
              full_name: 'Nguyễn Trường Giang',
              region: null,
              avatar_url:
                'https://salt.tikicdn.com/cache/512x512/ts/avatar/54/e2/4b/1392f853bade0706499c98d69991208d.jpg',
              created_time: '2016-10-06 16:56:26',
              group_id: 8,
              purchased: true,
              purchased_at: 1665739419,
              contribute_info: {
                id: 1757100,
                name: 'Nguyễn Trường Giang',
                avatar:
                  'https://salt.tikicdn.com/cache/512x512/ts/avatar/54/e2/4b/1392f853bade0706499c98d69991208d.jpg',
                summary: {
                  joined_time: 'Đã tham gia 6 năm',
                  total_review: 43,
                  total_thank: 84,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Bạc',
              'Dung lượng 128GB',
            ],
            product_attributes: ['Màu: Bạc', 'Dung lượng: 128GB'],
            spid: 197216283,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-15 09:44:52',
              delivery_date: '2022-10-14 19:14:38',
              current_date: '2022-10-29 17:03:13',
              content: 'Đã dùng 1 ngày',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 1 ngày.',
            },
            comments: [],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 18036270,
            title: 'Cực kì hài lòng',
            content:
              'Hàng vừa giao đến tay sáng nay, giá sau kmai = vs giá trên hoanghamobile.\r\n\r\nTình cờ thấy qc ưu đãi của Tiki nên thử vào đặt mua, chờ 4 ngày là có hàng, g mà chờ HH trả theo thứ tự, hẹn sang tận t11 mà còn chưa biết ngày nào T_T\r\n\r\nMáy trv, m soi kỹ k bị vệt xước hay sờn sơn nào, hy vọng máy chạy ngon k phải dùng đến bh 🥹',
            status: 'approved',
            thank_count: 0,
            score: 33.33333333,
            new_score: 0.13515962,
            customer_id: 8618827,
            comment_count: 0,
            rating: 5,
            images: [
              {
                id: 3953698,
                full_path:
                  'https://salt.tikicdn.com/ts/review/f0/1e/2e/0b84b852758233d2755f86a9ccb0735a.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1666604420,
            created_by: {
              id: 8618827,
              name: 'Hằng Libra',
              full_name: 'Hằng Libra',
              region: null,
              avatar_url:
                'http://s120.avatar.talk.zdn.vn/9/6/a/c/6/120/f6e25a2a386b9d83cea4d7179b9aa904.jpg',
              created_time: '2018-10-26 09:25:26',
              group_id: 8,
              purchased: true,
              purchased_at: 1666273106,
              contribute_info: {
                id: 8618827,
                name: 'Hằng Libra',
                avatar:
                  'http://s120.avatar.talk.zdn.vn/9/6/a/c/6/120/f6e25a2a386b9d83cea4d7179b9aa904.jpg',
                summary: {
                  joined_time: 'Đã tham gia 4 năm',
                  total_review: 1,
                  total_thank: 0,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Tím',
              'Dung lượng 256GB',
            ],
            product_attributes: ['Màu: Tím', 'Dung lượng: 256GB'],
            spid: 197216297,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-24 16:40:20',
              delivery_date: '2022-10-24 10:23:48',
              current_date: '2022-10-29 17:03:13',
              content: 'Đã dùng 6 giờ',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 6 giờ.',
            },
            comments: [],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 17960468,
            title: 'Cực kì hài lòng',
            content:
              'Nếu ai đang băn khoăn dòng điện thoại có tính năng như IP 14 Promax nhưng nhỏ gọn, nhẹ hơn (pin có ít hơn 1 xíu, nhưng không ảnh hưởng) thì có thể chọn dòng Pro.\r\nMình mua onl trên Tiki xong ghé shop để mua case và dán điện thoại!\r\n\r\nTiki giao hàng chie trong 2 giờ, rất chuyên nghiệp ạ 🧚🏼‍♂️',
            status: 'approved',
            thank_count: 1,
            score: 1.5374677,
            new_score: 0.13511897,
            customer_id: 439287,
            comment_count: 0,
            rating: 5,
            images: [
              {
                id: 3936340,
                full_path:
                  'https://salt.tikicdn.com/ts/review/de/7d/3c/795bf508588bdf289ae506f8e73a2964.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1665758667,
            created_by: {
              id: 439287,
              name: 'Nguyễn Thanh Phước',
              full_name: 'Nguyễn Thanh Phước',
              region: null,
              avatar_url:
                'https://salt.tikicdn.com/cache/512x512/ts/avatar/91/9a/4f/eb46d6cd8d6aa5439d0777e5d4663040.jpg',
              created_time: '2014-10-02 18:36:18',
              group_id: 8,
              purchased: true,
              purchased_at: 1665742964,
              contribute_info: {
                id: 439287,
                name: 'Nguyễn Thanh Phước',
                avatar:
                  'https://salt.tikicdn.com/cache/512x512/ts/avatar/91/9a/4f/eb46d6cd8d6aa5439d0777e5d4663040.jpg',
                summary: {
                  joined_time: 'Đã tham gia 8 năm',
                  total_review: 63,
                  total_thank: 9,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Tím',
              'Dung lượng 256GB',
            ],
            product_attributes: ['Màu: Tím', 'Dung lượng: 256GB'],
            spid: 197216297,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-14 21:44:27',
              delivery_date: '2022-10-14 19:12:33',
              current_date: '2022-10-29 17:03:13',
              content: 'Đã dùng 3 giờ',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 3 giờ.',
            },
            comments: [],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 18044252,
            title: 'Cực kì hài lòng',
            content:
              'Màu tím siêu đẹp siêu sang xịn mịn. Màn hình đẹp hơn 11 pm xa lắc. Máy nhỏ gọn, đằm tay.\r\nGiá siêu tốt, add voucher của tiki, giảm giá của thẻ, hoàn tiền chỉ còn 26tr cho bảng 256GB\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n🐧',
            status: 'approved',
            thank_count: 1,
            score: 38.61111111,
            new_score: 0.12891671,
            customer_id: 674793,
            comment_count: 1,
            rating: 5,
            images: [
              {
                id: 3955962,
                full_path:
                  'https://salt.tikicdn.com/ts/review/25/58/4a/eb1ad0c753953c8b2bf03756a9379337.jpg',
                status: 'approved',
              },
              {
                id: 3955963,
                full_path:
                  'https://salt.tikicdn.com/ts/review/54/7c/2a/37590e764b2d4d294860424cf64b6a76.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1666684206,
            created_by: {
              id: 674793,
              name: 'Phạm Nguyên Đức',
              full_name: 'Phạm Nguyên Đức',
              region: null,
              avatar_url: '//tiki.vn/assets/img/avatar.png',
              created_time: '2015-06-24 13:47:49',
              group_id: 8,
              purchased: true,
              purchased_at: 1666446378,
              contribute_info: {
                id: 674793,
                name: 'Phạm Nguyên Đức',
                avatar: '//tiki.vn/assets/img/avatar.png',
                summary: {
                  joined_time: 'Đã tham gia 7 năm',
                  total_review: 16,
                  total_thank: 23,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Tím',
              'Dung lượng 256GB',
            ],
            product_attributes: ['Màu: Tím', 'Dung lượng: 256GB'],
            spid: 197216297,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-25 14:50:06',
              delivery_date: '2022-10-25 09:56:33',
              current_date: '2022-10-29 17:03:13',
              content: 'Đã dùng 5 giờ',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 5 giờ.',
            },
            comments: [
              {
                id: 2721675,
                review_id: 18044252,
                commentator: 'customer',
                customer_id: 21599719,
                fullname: 'Nguyễn Thanh Tùng',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content: 'làm gì rẻ đến 26tr dc',
                score: 0,
                create_at: 1666686905,
                badge: '',
                status: 2,
                is_reported: false,
              },
            ],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
        ],
        paging: {
          total: 63,
          per_page: 5,
          current_page: 1,
          last_page: 13,
          from: 1,
          to: 5,
        },
        sort_options: [
          [
            {
              label: 'Hữu ích',
              value: 'score|desc',
            },
            {
              label: 'Mới nhất',
              value: 'id|desc',
            },
            {
              label: 'Có hình ảnh',
              value: 'has_image',
            },
          ],
          [
            {
              label: 'Tất cả khách hàng',
              value: 'customer|all',
            },
            {
              label: 'Khách đã mua hàng',
              value: 'bought',
            },
          ],
          [
            {
              label: 'Tất cả sao',
              value: 'stars|all',
            },
            {
              label: '5 sao',
              value: 'stars|5',
            },
            {
              label: '4 sao',
              value: 'stars|4',
            },
            {
              label: '3 sao',
              value: 'stars|3',
            },
            {
              label: '2 sao',
              value: 'stars|2',
            },
            {
              label: '1 sao',
              value: 'stars|1',
            },
            {
              label: 'Hài lòng',
              value: 'stars|4|5',
            },
            {
              label: 'Chưa hài lòng',
              value: 'stars|1|2|3',
            },
          ],
        ],
        exclude_image: false,
        attribute_vote_summary: [],
      },
      isRecallClient: true,
      bundleDeal: {
        data: [
          {
            id: 123836523,
            master_id: 123836523,
            sku: '9189782407730',
            name: 'Adapter Sạc 1 Cổng USB Type-C 20W - Trắng',
            url_key: 'adapter-sac-1-cong-usb-type-c-20w-trang-p123836523',
            url_path: 'adapter-sac-1-cong-usb-type-c-20w-trang-p123836523.html',
            type: 'configurable',
            price: 499000,
            list_price: 520000,
            original_price: 540000,
            bundle_price: null,
            discount_rate: 5,
            checked: true,
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/25/37/bb/903f9521c377c32546240b617410d728.jpg',
            children: [
              {
                id: 71523845,
                sku: '4525003277984',
                name: 'Adapter Sạc 1 Cổng USB Type-C 20W Apple MHJE3ZA/A - Trắng',
              },
            ],
            configurable_options: [
              {
                code: 'option1',
                name: 'Màu',
                position: 0,
                values: [
                  {
                    label: 'Trắng',
                  },
                ],
              },
            ],
            configurable_products: [
              {
                id: 71523845,
                master_id: 123836523,
                sku: '4525003277984',
                name: 'Adapter Sạc 1 Cổng USB Type-C 20W Apple MHJE3ZA/A - Trắng',
                url_key: 'adapter-sac-1-cong-usb-type-c-20w-trang-p123836523',
                url_path:
                  'adapter-sac-1-cong-usb-type-c-20w-trang-p123836523.html',
                type: 'simple',
                price: 499000,
                list_price: 520000,
                original_price: 520000,
                bundle_price: 499000,
                discount_rate: 5,
                checked: false,
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/b9/b0/cf/c7e8e18f606f3db4bef450cfacb53532.jpg',
                selected: true,
                option1: 'Trắng',
              },
            ],
            add_to_cart: 71523845,
          },
          {
            id: 170280931,
            master_id: 1935009,
            sku: '1064665479488',
            name: 'Tai Nghe Apple EarPods Cổng Lightning - MMTN2',
            url_key: 'tai-nghe-apple-earpods-cong-lightning-mmtn2-p1935009',
            url_path:
              'tai-nghe-apple-earpods-cong-lightning-mmtn2-p1935009.html',
            type: 'simple',
            price: 499000,
            list_price: 532000,
            original_price: 532000,
            bundle_price: 499000,
            discount_rate: 7,
            checked: true,
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/55/e5/76/d71f8f8733018b6426548ee80caede92.jpg',
            add_to_cart: 170280931,
          },
          {
            id: 193631886,
            master_id: 193631885,
            sku: '7221533345761',
            name: 'Adapter Sạc 2 Cổng USB Type-C 35W - MNWP3ZA/A - Trắng',
            url_key:
              'adapter-sac-2-cong-usb-type-c-35w-apple-mnwp3za-a-trang-p193631885',
            url_path:
              'adapter-sac-2-cong-usb-type-c-35w-apple-mnwp3za-a-trang-p193631885.html',
            type: 'simple',
            price: 1230000,
            list_price: 1300000,
            original_price: 1300000,
            bundle_price: 1230000,
            discount_rate: 6,
            checked: false,
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/df/cd/97/a683ccfa07dd409d9b769a69a87f0e61.png',
            add_to_cart: 193631886,
          },
          {
            id: 197674960,
            master_id: 197674960,
            sku: '8734725247867',
            name: 'Apple Watch SE 2022 GPS Sport Band (Viền Nhôm, Dây Cao Su)',
            url_key:
              'apple-watch-se-2022-gps-sport-band-vien-nhom-day-cao-su-p197674960',
            url_path:
              'apple-watch-se-2022-gps-sport-band-vien-nhom-day-cao-su-p197674960.html',
            type: 'configurable',
            price: 6890000,
            list_price: 6990000,
            original_price: 6990000,
            bundle_price: null,
            discount_rate: 2,
            checked: false,
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/ab/8d/b4/42549218027270341ff98b29c5aadeff.png',
            children: [
              {
                id: 197674964,
                sku: '9307367630856',
                name: 'Apple Watch SE 2022 GPS Sport Band - Midnight - 40mm - MNJT3VN/A',
              },
            ],
            configurable_options: [
              {
                code: 'option1',
                name: 'Màu',
                position: 0,
                values: [
                  {
                    label: 'Midnight',
                  },
                ],
              },
              {
                code: 'option2',
                name: 'Kích cỡ',
                position: 0,
                values: [
                  {
                    label: '40mm',
                  },
                ],
              },
            ],
            configurable_products: [
              {
                id: 197674964,
                master_id: 197674960,
                sku: '9307367630856',
                name: 'Apple Watch SE 2022 GPS Sport Band - Midnight - 40mm - MNJT3VN/A',
                url_key:
                  'apple-watch-se-2022-gps-sport-band-vien-nhom-day-cao-su-p197674960',
                url_path:
                  'apple-watch-se-2022-gps-sport-band-vien-nhom-day-cao-su-p197674960.html',
                type: 'simple',
                price: 6890000,
                list_price: 6990000,
                original_price: 6990000,
                bundle_price: 6890000,
                discount_rate: 2,
                checked: false,
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/ab/8d/b4/42549218027270341ff98b29c5aadeff.png',
                selected: true,
                option1: 'Midnight',
                option2: '40mm',
              },
            ],
            add_to_cart: 197674964,
          },
          {
            id: 198823492,
            master_id: 198823492,
            sku: '4814989791814',
            name: 'Ốp lưng nhựa trong hỗ trợ Magsafe cho iPhone 14 Series',
            url_key:
              'op-lung-nhua-trong-ho-tro-magsafe-cho-iphone-14-series-p198823492',
            url_path:
              'op-lung-nhua-trong-ho-tro-magsafe-cho-iphone-14-series-p198823492.html',
            type: 'configurable',
            price: 1190000,
            list_price: 1290000,
            original_price: 1190000,
            bundle_price: null,
            discount_rate: 8,
            checked: false,
            thumbnail_url:
              'https://salt.tikicdn.com/cache/280x280/ts/product/a9/a5/58/cdbe994e29336c343a37a63a043c158b.jpg',
            children: [
              {
                id: 198823494,
                sku: '7525192583971',
                name: 'Ốp lưng nhựa trong hỗ trợ Magsafe cho iPhone 14 Series - Trong suốt - iPhone 14 Pro Max',
              },
              {
                id: 198823496,
                sku: '7625582351164',
                name: 'Ốp lưng nhựa trong hỗ trợ Magsafe cho iPhone 14 Series - Trong suốt - iPhone 14 Pro',
              },
              {
                id: 198823498,
                sku: '1391438123990',
                name: 'Ốp lưng nhựa trong hỗ trợ Magsafe cho iPhone 14 Series - Trong suốt - iPhone 14',
              },
              {
                id: 198823500,
                sku: '2457112011302',
                name: 'Ốp lưng nhựa trong hỗ trợ Magsafe cho iPhone 14 Series - Trong suốt - iPhone 14 Plus',
              },
            ],
            configurable_options: [
              {
                code: 'option1',
                name: 'Màu',
                position: 0,
                values: [
                  {
                    label: 'Trong suốt',
                  },
                ],
              },
              {
                code: 'option2',
                name: 'Thiết bị',
                position: 0,
                values: [
                  {
                    label: 'iPhone 14',
                  },
                  {
                    label: 'iPhone 14 Plus',
                  },
                  {
                    label: 'iPhone 14 Pro',
                  },
                  {
                    label: 'iPhone 14 Pro Max',
                  },
                ],
              },
            ],
            configurable_products: [
              {
                id: 198823494,
                master_id: 198823492,
                sku: '7525192583971',
                name: 'Ốp lưng nhựa trong hỗ trợ Magsafe cho iPhone 14 Series - Trong suốt - iPhone 14 Pro Max',
                url_key:
                  'op-lung-nhua-trong-ho-tro-magsafe-cho-iphone-14-series-p198823492',
                url_path:
                  'op-lung-nhua-trong-ho-tro-magsafe-cho-iphone-14-series-p198823492.html',
                type: 'simple',
                price: 1190000,
                list_price: 1290000,
                original_price: 1290000,
                bundle_price: 1190000,
                discount_rate: 8,
                checked: false,
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/1c/07/f1/7696d64b1b5f065dbcd6add133b34de1.png',
                selected: true,
                option1: 'Trong suốt',
                option2: 'iPhone 14 Pro Max',
              },
              {
                id: 198823496,
                master_id: 198823492,
                sku: '7625582351164',
                name: 'Ốp lưng nhựa trong hỗ trợ Magsafe cho iPhone 14 Series - Trong suốt - iPhone 14 Pro',
                url_key:
                  'op-lung-nhua-trong-ho-tro-magsafe-cho-iphone-14-series-p198823492',
                url_path:
                  'op-lung-nhua-trong-ho-tro-magsafe-cho-iphone-14-series-p198823492.html',
                type: 'simple',
                price: 1190000,
                list_price: 1290000,
                original_price: 1290000,
                bundle_price: 1190000,
                discount_rate: 8,
                checked: false,
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/80/90/68/a54194e69a6b236ae7a6c99642e27586.png',
                selected: false,
                option1: 'Trong suốt',
                option2: 'iPhone 14 Pro',
              },
              {
                id: 198823498,
                master_id: 198823492,
                sku: '1391438123990',
                name: 'Ốp lưng nhựa trong hỗ trợ Magsafe cho iPhone 14 Series - Trong suốt - iPhone 14',
                url_key:
                  'op-lung-nhua-trong-ho-tro-magsafe-cho-iphone-14-series-p198823492',
                url_path:
                  'op-lung-nhua-trong-ho-tro-magsafe-cho-iphone-14-series-p198823492.html',
                type: 'simple',
                price: 1140000,
                list_price: 1190000,
                original_price: 1190000,
                bundle_price: 1140000,
                discount_rate: 5,
                checked: false,
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/a9/a5/58/cdbe994e29336c343a37a63a043c158b.jpg',
                selected: false,
                option1: 'Trong suốt',
                option2: 'iPhone 14',
              },
              {
                id: 198823500,
                master_id: 198823492,
                sku: '2457112011302',
                name: 'Ốp lưng nhựa trong hỗ trợ Magsafe cho iPhone 14 Series - Trong suốt - iPhone 14 Plus',
                url_key:
                  'op-lung-nhua-trong-ho-tro-magsafe-cho-iphone-14-series-p198823492',
                url_path:
                  'op-lung-nhua-trong-ho-tro-magsafe-cho-iphone-14-series-p198823492.html',
                type: 'simple',
                price: 1140000,
                list_price: 1190000,
                original_price: 1190000,
                bundle_price: 1140000,
                discount_rate: 5,
                checked: false,
                thumbnail_url:
                  'https://salt.tikicdn.com/cache/280x280/ts/product/76/bf/e9/a63be4a6ef7a6232b05df05dc642ed23.png',
                selected: false,
                option1: 'Trong suốt',
                option2: 'iPhone 14 Plus',
              },
            ],
            add_to_cart: 198823494,
          },
        ],
        main_item: {
          id: 197216279,
          master_id: 197216279,
          sku: '1974938370781',
          name: 'Apple iPhone 14 Pro',
          url_key: 'apple-iphone-14-pro-p197216279',
          url_path: 'apple-iphone-14-pro-p197216279.html',
          type: 'configurable',
          price: 31990000,
          list_price: 34990000,
          original_price: 31990000,
          bundle_price: null,
          discount_rate: 0,
          checked: false,
          thumbnail_url:
            'https://salt.tikicdn.com/cache/280x280/ts/product/ff/56/67/e3b9ff9622ed61e1ee11bf2297bcc2d8.png',
          seller_id: 1,
          seller_name: 'Tiki Trading',
          configurable_options: [
            {
              code: 'option1',
              name: 'Màu',
              position: 0,
              values: [
                {
                  label: 'Bạc',
                },
                {
                  label: 'Tím',
                },
                {
                  label: 'Vàng',
                },
                {
                  label: 'Đen',
                },
              ],
            },
            {
              code: 'option2',
              name: 'Dung lượng',
              position: 0,
              values: [
                {
                  label: '256GB',
                },
                {
                  label: '512GB',
                },
              ],
            },
          ],
          configurable_products: [
            {
              id: 197216292,
              master_id: 197216279,
              sku: '1504261159343',
              name: 'Apple iPhone 14 Pro 256GB Bạc',
              url_key: 'apple-iphone-14-pro-p197216279',
              url_path: 'apple-iphone-14-pro-p197216279.html',
              type: 'simple',
              price: 31990000,
              list_price: 34990000,
              original_price: 34990000,
              bundle_price: 31990000,
              discount_rate: 9,
              checked: false,
              thumbnail_url:
                'https://salt.tikicdn.com/cache/280x280/ts/product/ff/56/67/e3b9ff9622ed61e1ee11bf2297bcc2d8.png',
              selected: true,
              option1: 'Bạc',
              option2: '256GB',
            },
            {
              id: 197216313,
              master_id: 197216279,
              sku: '1870298593303',
              name: 'Apple iPhone 14 Pro 512GB Tím',
              url_key: 'apple-iphone-14-pro-p197216279',
              url_path: 'apple-iphone-14-pro-p197216279.html',
              type: 'simple',
              price: 37990000,
              list_price: 40990000,
              original_price: 40990000,
              bundle_price: 37990000,
              discount_rate: 8,
              checked: false,
              thumbnail_url:
                'https://salt.tikicdn.com/cache/280x280/ts/product/f5/52/80/bf8c8a44bbe2c3ffd1637d1baad8109d.png',
              selected: false,
              option1: 'Tím',
              option2: '512GB',
            },
            {
              id: 197216309,
              master_id: 197216279,
              sku: '1223887479944',
              name: 'Apple iPhone 14 Pro 512GB Vàng',
              url_key: 'apple-iphone-14-pro-p197216279',
              url_path: 'apple-iphone-14-pro-p197216279.html',
              type: 'simple',
              price: 36990000,
              list_price: 40990000,
              original_price: 40990000,
              bundle_price: 36990000,
              discount_rate: 10,
              checked: false,
              thumbnail_url:
                'https://salt.tikicdn.com/cache/280x280/ts/product/0c/dd/e7/324c166c55311ad2c82681c8291b15a1.png',
              selected: false,
              option1: 'Vàng',
              option2: '512GB',
            },
            {
              id: 197216297,
              master_id: 197216279,
              sku: '9857794441555',
              name: 'Apple iPhone 14 Pro 256GB Tím',
              url_key: 'apple-iphone-14-pro-p197216279',
              url_path: 'apple-iphone-14-pro-p197216279.html',
              type: 'simple',
              price: 32990000,
              list_price: 34990000,
              original_price: 34990000,
              bundle_price: 32990000,
              discount_rate: 6,
              checked: false,
              thumbnail_url:
                'https://salt.tikicdn.com/cache/280x280/ts/product/f5/52/80/0d495a09fa1240ac94fb80757a6b106a.png',
              selected: false,
              option1: 'Tím',
              option2: '256GB',
            },
            {
              id: 197216289,
              master_id: 197216279,
              sku: '6796201740668',
              name: 'Apple iPhone 14 Pro 256GB Đen',
              url_key: 'apple-iphone-14-pro-p197216279',
              url_path: 'apple-iphone-14-pro-p197216279.html',
              type: 'simple',
              price: 31990000,
              list_price: 34990000,
              original_price: 34990000,
              bundle_price: 31990000,
              discount_rate: 9,
              checked: false,
              thumbnail_url:
                'https://salt.tikicdn.com/cache/280x280/ts/product/0f/08/21/12eb60ad7be742d014afd8071b2b4710.png',
              selected: false,
              option1: 'Đen',
              option2: '256GB',
            },
            {
              id: 197216301,
              master_id: 197216279,
              sku: '2664132927038',
              name: 'Apple iPhone 14 Pro 512GB Đen',
              url_key: 'apple-iphone-14-pro-p197216279',
              url_path: 'apple-iphone-14-pro-p197216279.html',
              type: 'simple',
              price: 36990000,
              list_price: 40990000,
              original_price: 40990000,
              bundle_price: 36990000,
              discount_rate: 10,
              checked: false,
              thumbnail_url:
                'https://salt.tikicdn.com/cache/280x280/ts/product/0f/08/21/3d58e4c4d05c68b9d2c9d72da4e24d4b.png',
              selected: false,
              option1: 'Đen',
              option2: '512GB',
            },
          ],
          add_to_cart_id: 197216292,
        },
        add_to_cart: [71523845, 170280931],
        pricing: {
          total: 32988000,
          total_format: 'Tổng cộng: 32.988.000 đ',
          save: 54000,
          save_format: 'Tiết kiệm: 54.000 đ',
        },
        bundle_id: 39205,
        title: 'Mua Kèm Giảm Thêm',
        cost_saving_subtitle: '(so với giá mua lẻ)',
        cost_saving_text: 'Tiết kiệm 54.000 đ',
        btn_buy_more_text: 'Mua thêm',
        bundle_list_title: 'Mua Kèm Giảm Thêm',
        msg_policy_information: 'Mua thêm để được hưởng giá mua kèm',
        firstLoaded: true,
      },
      comboDeal: {
        title: '',
        combo_id: 0,
        view_more_text: '',
        view_more_url: '',
        is_view_more_button_displayed: false,
        items: [],
        logs: null,
        meta_data: null,
      },
    },
    review: {
      configReview: {},
      reviewsWaiting: {
        loading: false,
        data: [],
        paging: {},
      },
      myReviews: {
        loading: false,
        data: [],
        paging: {},
      },
      contribute: {},
      reviewsWithoutImage: {},
      reviewsUpgrade: {},
      reviewsPromotion: [],
      mapReviewsPromotion: {},
      isLoadDoneReviewsPromotion: false,
      reviews: {
        stars: {
          '1': {
            count: 0,
            percent: 0,
          },
          '2': {
            count: 0,
            percent: 0,
          },
          '3': {
            count: 1,
            percent: 1,
          },
          '4': {
            count: 1,
            percent: 2,
          },
          '5': {
            count: 61,
            percent: 97,
          },
        },
        rating_average: 5,
        reviews_count: 63,
        review_photo: {
          total: 32,
          total_photo: 47,
        },
        data: [
          {
            id: 17958526,
            title: 'Cực kì hài lòng',
            content:
              'Hôm qua rất may mắn mình đã đặt được màu yêu thích và add mã giảm mua được giá khá là rẻ so với thị trường. Hôm qua lúc mình mua là gần 1h sáng vì nghĩ chắc hết suất giao sớm rồi và hoàn thành đơn Tiki hẹn 21-10 trả máy... Nhưng điều bất ngờ xảy ra, hôm nay Tiki giao cho mình luôn, quá tuyệt vời, anh shipper rất nhiệt tình chờ vì mình không biết đơn giao. Đã 3 lần săn deal trên Tiki, ip11 promax , ip13 và giờ ip14 pro. Rất tin tưởng, TiKi mãi đỉnh...., sẽ luôn ủng hộ Tiki. Cảm ơn',
            status: 'approved',
            thank_count: 11,
            score: 0.34090909,
            new_score: 0.14760412,
            customer_id: 23381998,
            comment_count: 7,
            rating: 5,
            images: [
              {
                id: 3935884,
                full_path:
                  'https://salt.tikicdn.com/ts/review/14/1d/7b/b641eb8ada19690eb15f4f74255eb117.jpg',
                status: 'approved',
              },
              {
                id: 3935885,
                full_path:
                  'https://salt.tikicdn.com/ts/review/3b/44/69/6b249d3f6e7a34cac8daa37595bd5bfd.jpg',
                status: 'approved',
              },
              {
                id: 3935886,
                full_path:
                  'https://salt.tikicdn.com/ts/review/eb/c0/df/acb5b2b0e065a24f0ad65ee51970f423.jpg',
                status: 'approved',
              },
              {
                id: 3935887,
                full_path:
                  'https://salt.tikicdn.com/ts/review/d7/1d/de/3947a2274b27a2d4f52fcfd33827a887.jpg',
                status: 'approved',
              },
              {
                id: 3935888,
                full_path:
                  'https://salt.tikicdn.com/ts/review/bb/a0/3c/9134d1dc9e9a069f861826b2aa731b91.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1665744789,
            created_by: {
              id: 23381998,
              name: 'Hằng Nguyễn',
              full_name: 'Hằng Nguyễn',
              region: null,
              avatar_url: '//tiki.vn/assets/img/avatar.png',
              created_time: '2021-09-03 20:41:30',
              group_id: 8,
              purchased: true,
              purchased_at: 1665682542,
              contribute_info: {
                id: 23381998,
                name: 'Hằng Nguyễn',
                avatar: '//tiki.vn/assets/img/avatar.png',
                summary: {
                  joined_time: 'Đã tham gia 1 năm',
                  total_review: 3,
                  total_thank: 11,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Bạc',
              'Dung lượng 128GB',
            ],
            product_attributes: ['Màu: Bạc', 'Dung lượng: 128GB'],
            spid: 197216283,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-14 17:53:09',
              delivery_date: '2022-10-14 15:19:30',
              current_date: '2022-10-29 16:50:35',
              content: 'Đã dùng 3 giờ',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 3 giờ.',
            },
            comments: [
              {
                id: 2720886,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 8935147,
                fullname: 'Duy Truong',
                avatar_url:
                  'https://lh4.googleusercontent.com/-_apcjRWUW9s/AAAAAAAAAAI/AAAAAAAAAAA/ABtNlbALN5Mv15pharCLc6AtTlOHIgb-Bg/mo/photo.jpg',
                content: 'Ban mua gia săn sale la nhiu bạn ?',
                score: 0,
                create_at: 1666618643,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2717286,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 1231716,
                fullname: 'Như Phong',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content: 'iphone của Tiki Trading auto 100% VNA nhé',
                score: 0,
                create_at: 1666394268,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2707933,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 22165542,
                fullname: 'LÊ PHƯỚC TÀI',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content: 'Bạn đó có chụp ảnh sau lưng hộp đó mã VN/A',
                score: 0,
                create_at: 1665914456,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2707803,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 11508570,
                fullname: 'Anh Tuấn',
                avatar_url:
                  'https://s120.avatar.talk.zdn.vn/e/d/6/4/1/120/9c7b4e608a61ab53897c263bb6202401.jpg',
                content: 'Tiki Trading auto VN/A',
                score: 0,
                create_at: 1665905748,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2707487,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 1635513,
                fullname: 'Nguyễn Công Khanh',
                avatar_url:
                  'https://salt.tikicdn.com/cache/512x512/ts/avatar/49/ed/4b/800389c818f48cf646264d86c254724e.png',
                content:
                  'Bán hàng xách tay để bị Apple phạt hay gì? :))) có thế cũng hỏi',
                score: 0,
                create_at: 1665851228,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2706204,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 1702769,
                fullname: 'Ngo Le Ngoc Bich',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content:
                  'Không thấy ghi bảo hành chính hãng VN/A nên cũng hơi ngại, ai trả lời giúp mình với ạ',
                score: 0,
                create_at: 1665764056,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2706043,
                review_id: 17958526,
                commentator: 'customer',
                customer_id: 8828075,
                fullname: 'Trang Nguyen',
                avatar_url:
                  'https://s120.avatar.talk.zdn.vn/9/1/2/e/8/120/ad265d62b12e686135495fb2ec552456.jpg',
                content: 'Máy của Tiki là mã VN hết hả bạn ơi ?',
                score: 0,
                create_at: 1665750280,
                badge: '',
                status: 2,
                is_reported: false,
              },
            ],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 17962848,
            title: 'Cực kì hài lòng',
            content:
              'Giao cực nhanh. Vừa lên hàng mình đặt luôn chưa đầy 1 phút thì hết nên ông nào nhanh tay thì được thật. Nhận máy vào ngày mở bán cảm giác thích hẳn. Ở nhà chờ shipper đến ko phải thức đêm hay chạy đi nhận máy. Seal tự bóc, ko phải kích hoạt tại chỗ như một số chỗ. Thanh toán nhanh gọn. Tiki mãi đỉnh🫰',
            status: 'approved',
            thank_count: 7,
            score: 0.26498538,
            new_score: 0.13841551,
            customer_id: 1757100,
            comment_count: 0,
            rating: 5,
            images: [
              {
                id: 3936820,
                full_path:
                  'https://salt.tikicdn.com/ts/review/b6/04/a6/21199b81a3e262c5485ed4e8f539e57f.jpg',
                status: 'approved',
              },
              {
                id: 3936821,
                full_path:
                  'https://salt.tikicdn.com/ts/review/2e/6e/61/dc4d430a9d2278cec388210ed2ae2e86.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1665801892,
            created_by: {
              id: 1757100,
              name: 'Nguyễn Trường Giang',
              full_name: 'Nguyễn Trường Giang',
              region: null,
              avatar_url:
                'https://salt.tikicdn.com/cache/512x512/ts/avatar/54/e2/4b/1392f853bade0706499c98d69991208d.jpg',
              created_time: '2016-10-06 16:56:26',
              group_id: 8,
              purchased: true,
              purchased_at: 1665739419,
              contribute_info: {
                id: 1757100,
                name: 'Nguyễn Trường Giang',
                avatar:
                  'https://salt.tikicdn.com/cache/512x512/ts/avatar/54/e2/4b/1392f853bade0706499c98d69991208d.jpg',
                summary: {
                  joined_time: 'Đã tham gia 6 năm',
                  total_review: 43,
                  total_thank: 84,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Bạc',
              'Dung lượng 128GB',
            ],
            product_attributes: ['Màu: Bạc', 'Dung lượng: 128GB'],
            spid: 197216283,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-15 09:44:52',
              delivery_date: '2022-10-14 19:14:38',
              current_date: '2022-10-29 16:50:35',
              content: 'Đã dùng 1 ngày',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 1 ngày.',
            },
            comments: [],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 18036270,
            title: 'Cực kì hài lòng',
            content:
              'Hàng vừa giao đến tay sáng nay, giá sau kmai = vs giá trên hoanghamobile.\r\n\r\nTình cờ thấy qc ưu đãi của Tiki nên thử vào đặt mua, chờ 4 ngày là có hàng, g mà chờ HH trả theo thứ tự, hẹn sang tận t11 mà còn chưa biết ngày nào T_T\r\n\r\nMáy trv, m soi kỹ k bị vệt xước hay sờn sơn nào, hy vọng máy chạy ngon k phải dùng đến bh 🥹',
            status: 'approved',
            thank_count: 0,
            score: 33.33333333,
            new_score: 0.13515962,
            customer_id: 8618827,
            comment_count: 0,
            rating: 5,
            images: [
              {
                id: 3953698,
                full_path:
                  'https://salt.tikicdn.com/ts/review/f0/1e/2e/0b84b852758233d2755f86a9ccb0735a.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1666604420,
            created_by: {
              id: 8618827,
              name: 'Hằng Libra',
              full_name: 'Hằng Libra',
              region: null,
              avatar_url:
                'http://s120.avatar.talk.zdn.vn/9/6/a/c/6/120/f6e25a2a386b9d83cea4d7179b9aa904.jpg',
              created_time: '2018-10-26 09:25:26',
              group_id: 8,
              purchased: true,
              purchased_at: 1666273106,
              contribute_info: {
                id: 8618827,
                name: 'Hằng Libra',
                avatar:
                  'http://s120.avatar.talk.zdn.vn/9/6/a/c/6/120/f6e25a2a386b9d83cea4d7179b9aa904.jpg',
                summary: {
                  joined_time: 'Đã tham gia 4 năm',
                  total_review: 1,
                  total_thank: 0,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Tím',
              'Dung lượng 256GB',
            ],
            product_attributes: ['Màu: Tím', 'Dung lượng: 256GB'],
            spid: 197216297,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-24 16:40:20',
              delivery_date: '2022-10-24 10:23:48',
              current_date: '2022-10-29 16:50:35',
              content: 'Đã dùng 6 giờ',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 6 giờ.',
            },
            comments: [],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 17960468,
            title: 'Cực kì hài lòng',
            content:
              'Nếu ai đang băn khoăn dòng điện thoại có tính năng như IP 14 Promax nhưng nhỏ gọn, nhẹ hơn (pin có ít hơn 1 xíu, nhưng không ảnh hưởng) thì có thể chọn dòng Pro.\r\nMình mua onl trên Tiki xong ghé shop để mua case và dán điện thoại!\r\n\r\nTiki giao hàng chie trong 2 giờ, rất chuyên nghiệp ạ 🧚🏼‍♂️',
            status: 'approved',
            thank_count: 1,
            score: 1.5374677,
            new_score: 0.13511897,
            customer_id: 439287,
            comment_count: 0,
            rating: 5,
            images: [
              {
                id: 3936340,
                full_path:
                  'https://salt.tikicdn.com/ts/review/de/7d/3c/795bf508588bdf289ae506f8e73a2964.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1665758667,
            created_by: {
              id: 439287,
              name: 'Nguyễn Thanh Phước',
              full_name: 'Nguyễn Thanh Phước',
              region: null,
              avatar_url:
                'https://salt.tikicdn.com/cache/512x512/ts/avatar/91/9a/4f/eb46d6cd8d6aa5439d0777e5d4663040.jpg',
              created_time: '2014-10-02 18:36:18',
              group_id: 8,
              purchased: true,
              purchased_at: 1665742964,
              contribute_info: {
                id: 439287,
                name: 'Nguyễn Thanh Phước',
                avatar:
                  'https://salt.tikicdn.com/cache/512x512/ts/avatar/91/9a/4f/eb46d6cd8d6aa5439d0777e5d4663040.jpg',
                summary: {
                  joined_time: 'Đã tham gia 8 năm',
                  total_review: 63,
                  total_thank: 9,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Tím',
              'Dung lượng 256GB',
            ],
            product_attributes: ['Màu: Tím', 'Dung lượng: 256GB'],
            spid: 197216297,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-14 21:44:27',
              delivery_date: '2022-10-14 19:12:33',
              current_date: '2022-10-29 16:50:35',
              content: 'Đã dùng 3 giờ',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 3 giờ.',
            },
            comments: [],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 18044252,
            title: 'Cực kì hài lòng',
            content:
              'Màu tím siêu đẹp siêu sang xịn mịn. Màn hình đẹp hơn 11 pm xa lắc. Máy nhỏ gọn, đằm tay.\r\nGiá siêu tốt, add voucher của tiki, giảm giá của thẻ, hoàn tiền chỉ còn 26tr cho bảng 256GB\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n🐧',
            status: 'approved',
            thank_count: 1,
            score: 38.61111111,
            new_score: 0.12891671,
            customer_id: 674793,
            comment_count: 1,
            rating: 5,
            images: [
              {
                id: 3955962,
                full_path:
                  'https://salt.tikicdn.com/ts/review/25/58/4a/eb1ad0c753953c8b2bf03756a9379337.jpg',
                status: 'approved',
              },
              {
                id: 3955963,
                full_path:
                  'https://salt.tikicdn.com/ts/review/54/7c/2a/37590e764b2d4d294860424cf64b6a76.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1666684206,
            created_by: {
              id: 674793,
              name: 'Phạm Nguyên Đức',
              full_name: 'Phạm Nguyên Đức',
              region: null,
              avatar_url: '//tiki.vn/assets/img/avatar.png',
              created_time: '2015-06-24 13:47:49',
              group_id: 8,
              purchased: true,
              purchased_at: 1666446378,
              contribute_info: {
                id: 674793,
                name: 'Phạm Nguyên Đức',
                avatar: '//tiki.vn/assets/img/avatar.png',
                summary: {
                  joined_time: 'Đã tham gia 7 năm',
                  total_review: 16,
                  total_thank: 23,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Tím',
              'Dung lượng 256GB',
            ],
            product_attributes: ['Màu: Tím', 'Dung lượng: 256GB'],
            spid: 197216297,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-25 14:50:06',
              delivery_date: '2022-10-25 09:56:33',
              current_date: '2022-10-29 16:50:35',
              content: 'Đã dùng 5 giờ',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 5 giờ.',
            },
            comments: [
              {
                id: 2721675,
                review_id: 18044252,
                commentator: 'customer',
                customer_id: 21599719,
                fullname: 'Nguyễn Thanh Tùng',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content: 'làm gì rẻ đến 26tr dc',
                score: 0,
                create_at: 1666686905,
                badge: '',
                status: 2,
                is_reported: false,
              },
            ],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 18060959,
            title: 'Cực kì hài lòng',
            content:
              'Hơn 30tr một chút chưa kể đc hoàn astra và cashback, khá ổn so với các chỗ bán khác',
            status: 'approved',
            thank_count: 1,
            score: 17.88888889,
            new_score: 0.11653446,
            customer_id: 565632,
            comment_count: 0,
            rating: 5,
            images: [
              {
                id: 3960383,
                full_path:
                  'https://salt.tikicdn.com/ts/review/65/44/78/2ad6c00acc22d927d02330477072b4c7.jpg',
                status: 'approved',
              },
              {
                id: 3960384,
                full_path:
                  'https://salt.tikicdn.com/ts/review/bb/42/cc/070024995deb05f82255cf3dac781f59.jpg',
                status: 'approved',
              },
              {
                id: 3960385,
                full_path:
                  'https://salt.tikicdn.com/ts/review/5b/5f/c5/ae3a417599da5a3e97d715d2930c0440.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1666852255,
            created_by: {
              id: 565632,
              name: 'Nhân Nguyễn Toàn',
              full_name: 'Nhân Nguyễn Toàn',
              region: null,
              avatar_url: '//tiki.vn/assets/img/avatar.png',
              created_time: '2015-02-25 00:36:01',
              group_id: 8,
              purchased: true,
              purchased_at: 1666672222,
              contribute_info: {
                id: 565632,
                name: 'Nhân Nguyễn Toàn',
                avatar: '//tiki.vn/assets/img/avatar.png',
                summary: {
                  joined_time: 'Đã tham gia 8 năm',
                  total_review: 169,
                  total_thank: 22,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Đen',
              'Dung lượng 256GB',
            ],
            product_attributes: ['Màu: Đen', 'Dung lượng: 256GB'],
            spid: 197216289,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-27 13:30:55',
              delivery_date: '2022-10-25 13:10:56',
              current_date: '2022-10-29 16:50:35',
              content: 'Đã dùng 2 ngày',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 2 ngày.',
            },
            comments: [],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 18020991,
            title: 'Cực kì hài lòng',
            content:
              'Mua 1 cái 14 pro ở Tiki và 1 cái 14 promax ở FPT. Rất may là Tiki giao trong ngày 14/10 còn FPT thì im tới giờ luôn. Năm sau mua hết trên Tiki cho lành.',
            status: 'approved',
            thank_count: 0,
            score: 38.88888889,
            new_score: 0.12064168,
            customer_id: 729660,
            comment_count: 0,
            rating: 5,
            images: [
              {
                id: 3950319,
                full_path:
                  'https://salt.tikicdn.com/ts/review/f2/89/86/12254866fd03da7e2a520f17805a7cec.jpg',
                status: 'approved',
              },
              {
                id: 3950320,
                full_path:
                  'https://salt.tikicdn.com/ts/review/69/ba/be/780c4b3a3bef9ccff04d21438825bbd5.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1666434533,
            created_by: {
              id: 729660,
              name: 'Mạnh Duy',
              full_name: 'Mạnh Duy',
              region: null,
              avatar_url: '//tiki.vn/assets/img/avatar.png',
              created_time: '2015-07-30 18:46:33',
              group_id: 8,
              purchased: true,
              purchased_at: 1665682490,
              contribute_info: {
                id: 729660,
                name: 'Mạnh Duy',
                avatar: '//tiki.vn/assets/img/avatar.png',
                summary: {
                  joined_time: 'Đã tham gia 7 năm',
                  total_review: 128,
                  total_thank: 40,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Bạc',
              'Dung lượng 128GB',
            ],
            product_attributes: ['Màu: Bạc', 'Dung lượng: 128GB'],
            spid: 197216283,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-22 17:28:53',
              delivery_date: '2022-10-15 10:45:11',
              current_date: '2022-10-29 16:50:35',
              content: 'Đã dùng 7 ngày',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 7 ngày.',
            },
            comments: [],
            vote_attributes: {
              agree: [
                'Bộ nhớ lớn',
                'Camera chụp hình đẹp',
                'Độ phân giải sắc nét',
                'Dung lương pin lớn',
              ],
              disagree: [],
            },
          },
          {
            id: 17966055,
            title: 'Cực kì hài lòng',
            content:
              'Giao hàng nhanh, năm nay không có hàng iphone 14 pro max mua tạm để trãi nghiệm tính năng mới. \r\nDịch vụ tiki khá tốt, giao hàng khá nha.',
            status: 'approved',
            thank_count: 3,
            score: 0.40503558,
            new_score: 0.11952346,
            customer_id: 21271738,
            comment_count: 5,
            rating: 5,
            images: [
              {
                id: 3937723,
                full_path:
                  'https://salt.tikicdn.com/ts/review/56/62/03/fb7c02a23981bae6a97efcbef7f2ab5c.jpg',
                status: 'approved',
              },
              {
                id: 3937724,
                full_path:
                  'https://salt.tikicdn.com/ts/review/04/cd/d7/a5fd4a4a42a3185ca435bfc836381086.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1665826541,
            created_by: {
              id: 21271738,
              name: 'A B',
              full_name: 'A B',
              region: null,
              avatar_url: '//tiki.vn/assets/img/avatar.png',
              created_time: '2021-04-11 13:23:29',
              group_id: 8,
              purchased: true,
              purchased_at: 1665818235,
              contribute_info: {
                id: 21271738,
                name: 'A B',
                avatar: '//tiki.vn/assets/img/avatar.png',
                summary: {
                  joined_time: 'Đã tham gia 2 năm',
                  total_review: 66,
                  total_thank: 25,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Tím',
              'Dung lượng 256GB',
            ],
            product_attributes: ['Màu: Tím', 'Dung lượng: 256GB'],
            spid: 197216297,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            timeline: {
              review_created_date: '2022-10-15 16:35:41',
              delivery_date: '2022-10-15 16:28:32',
              current_date: '2022-10-29 16:50:35',
              content: 'Đã dùng 7 phút',
              explain: 'Khi viết đánh giá, khách hàng đã dùng sản phẩm 7 phút.',
            },
            comments: [
              {
                id: 2714946,
                review_id: 17966055,
                commentator: 'customer',
                customer_id: 11577765,
                fullname: 'Nguyễn Viết Ước',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content:
                  'xu thì đi mua chứ gì đâu! lấy tiền ra mua xu trên tiki ấy, kiểu như một dạng cryto của Tiki',
                score: 0,
                create_at: 1666265004,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2714490,
                review_id: 17966055,
                commentator: 'customer',
                customer_id: 987899,
                fullname: 'Nguyễn Hữu Anh Khôi',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content:
                  'Bạn này chắc làm trong tiki nên được ưu đãi tiki xu. 17tr lun, quá kinh..',
                score: 0,
                create_at: 1666249247,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2712036,
                review_id: 17966055,
                commentator: 'customer',
                customer_id: 16667,
                fullname: 'Nguyễn Minh Luân',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content: 'xu đâu nhiều thế bạn',
                score: 0,
                create_at: 1666105427,
                badge: '',
                status: 2,
                is_reported: false,
              },
              {
                id: 2707991,
                review_id: 17966055,
                commentator: 'customer',
                customer_id: 21271738,
                fullname: 'A B',
                avatar_url: 'https://tiki.vn/assets/img/avatar.png',
                content: 'Đúng r bạn mua siêu ưu đãi',
                score: 0,
                create_at: 1665921235,
                badge:
                  'https://salt.tikicdn.com/ts/reviews/1a/c6/8e/aed2b9016c8a2840ea0d9268605c8d3c.png',
                status: 2,
                is_reported: false,
              },
              {
                id: 2707485,
                review_id: 17966055,
                commentator: 'customer',
                customer_id: 1635513,
                fullname: 'Nguyễn Công Khanh',
                avatar_url:
                  'https://salt.tikicdn.com/cache/512x512/ts/avatar/49/ed/4b/800389c818f48cf646264d86c254724e.png',
                content: '17 triệu xu =.=',
                score: 0,
                create_at: 1665851025,
                badge: '',
                status: 2,
                is_reported: false,
              },
            ],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 18078748,
            title: 'Cực kì hài lòng',
            content:
              'Vô cùng hài lòng về dịch vụ giao hàng của Tiki. Đặt hàng giao siêu nhanh, nhanh nhất trong các bên ecom luôn. Cảm ơn nhiều',
            status: 'approved',
            thank_count: 0,
            score: 38.88888889,
            new_score: 0.11820525,
            customer_id: 8048851,
            comment_count: 0,
            rating: 5,
            images: [
              {
                id: 3965646,
                full_path:
                  'https://salt.tikicdn.com/ts/review/25/38/96/bb1af9f5bb9db5d582323a100533a5de.jpg',
                status: 'approved',
              },
              {
                id: 3965647,
                full_path:
                  'https://salt.tikicdn.com/ts/review/7a/d3/cf/1263787f8e2b44a4c97e3e09fa1f4640.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1667036518,
            created_by: {
              id: 8048851,
              name: 'Phạm Cảnh Quân',
              full_name: 'Phạm Cảnh Quân',
              region: null,
              avatar_url:
                'https://s120.avatar.talk.zdn.vn/2/b/7/b/11/120/f33eb19249cb0f492e100c3e6eb3be55.jpg',
              created_time: '2018-09-19 12:27:15',
              group_id: 8,
              purchased: true,
              purchased_at: 1666770604,
              contribute_info: {
                id: 8048851,
                name: 'Phạm Cảnh Quân',
                avatar:
                  'https://s120.avatar.talk.zdn.vn/2/b/7/b/11/120/f33eb19249cb0f492e100c3e6eb3be55.jpg',
                summary: {
                  joined_time: 'Đã tham gia 4 năm',
                  total_review: 15,
                  total_thank: 3,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Tím',
              'Dung lượng 128GB',
            ],
            product_attributes: ['Màu: Tím', 'Dung lượng: 128GB'],
            spid: 197216287,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            comments: [],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
          {
            id: 18078744,
            title: 'Cực kì hài lòng',
            content:
              'Vô cùng hài lòng về dịch vụ giao hàng của Tiki. Đặt hàng giao siêu nhanh, nhanh nhất trong các bên ecom luôn. Cảm ơn nhiều',
            status: 'approved',
            thank_count: 0,
            score: 38.88888889,
            new_score: 0.11820525,
            customer_id: 8048851,
            comment_count: 0,
            rating: 5,
            images: [
              {
                id: 3965643,
                full_path:
                  'https://salt.tikicdn.com/ts/review/21/bd/e8/c968a7202db662a9b46d6d379bc7308f.jpg',
                status: 'approved',
              },
              {
                id: 3965644,
                full_path:
                  'https://salt.tikicdn.com/ts/review/e1/90/9a/9a6199286bf1bf81e01c06fc25a3a4e9.jpg',
                status: 'approved',
              },
            ],
            thanked: false,
            created_at: 1667036483,
            created_by: {
              id: 8048851,
              name: 'Phạm Cảnh Quân',
              full_name: 'Phạm Cảnh Quân',
              region: null,
              avatar_url:
                'https://s120.avatar.talk.zdn.vn/2/b/7/b/11/120/f33eb19249cb0f492e100c3e6eb3be55.jpg',
              created_time: '2018-09-19 12:27:15',
              group_id: 8,
              purchased: true,
              purchased_at: 1666774507,
              contribute_info: {
                id: 8048851,
                name: 'Phạm Cảnh Quân',
                avatar:
                  'https://s120.avatar.talk.zdn.vn/2/b/7/b/11/120/f33eb19249cb0f492e100c3e6eb3be55.jpg',
                summary: {
                  joined_time: 'Đã tham gia 4 năm',
                  total_review: 15,
                  total_thank: 3,
                },
              },
            },
            suggestions: [],
            attributes: [
              'Mua từ nhà bán Tiki Trading',
              'Màu Vàng',
              'Dung lượng 128GB',
            ],
            product_attributes: ['Màu: Vàng', 'Dung lượng: 128GB'],
            spid: 197216285,
            is_photo: true,
            seller: {
              id: 1,
              name: 'Tiki Trading',
              logo: 'https://vcdn.tikicdn.com/ts/seller/ee/fa/a0/98f3f134f85cff2c6972c31777629aa0.png',
            },
            product_id: 197216279,
            comments: [],
            vote_attributes: {
              agree: [],
              disagree: [],
            },
          },
        ],
        paging: {
          total: 63,
          per_page: 10,
          current_page: 1,
          last_page: 7,
          from: 1,
          to: 10,
        },
        sort_options: [
          [
            {
              label: 'Hữu ích',
              value: 'score|desc',
            },
            {
              label: 'Mới nhất',
              value: 'id|desc',
            },
            {
              label: 'Có hình ảnh',
              value: 'has_image',
            },
          ],
          [
            {
              label: 'Tất cả khách hàng',
              value: 'customer|all',
            },
            {
              label: 'Khách đã mua hàng',
              value: 'bought',
            },
          ],
          [
            {
              label: 'Tất cả sao',
              value: 'stars|all',
            },
            {
              label: '5 sao',
              value: 'stars|5',
            },
            {
              label: '4 sao',
              value: 'stars|4',
            },
            {
              label: '3 sao',
              value: 'stars|3',
            },
            {
              label: '2 sao',
              value: 'stars|2',
            },
            {
              label: '1 sao',
              value: 'stars|1',
            },
            {
              label: 'Hài lòng',
              value: 'stars|4|5',
            },
            {
              label: 'Chưa hài lòng',
              value: 'stars|1|2|3',
            },
          ],
        ],
        exclude_image: false,
        attribute_vote_summary: {
          product_id: 197216279,
          seller_id: 1,
          number_of_vote_to_show: 20,
          votes: [
            {
              attribute_id: 'bo_nho_lon',
              attribute_name: 'Bộ nhớ lớn',
              total_vote: 2,
              agree: 2,
              disagree: 0,
              no_idea: 0,
            },
            {
              attribute_id: 'dung_luong_pin_lon',
              attribute_name: 'Dung lương pin lớn',
              total_vote: 2,
              agree: 2,
              disagree: 0,
              no_idea: 0,
            },
            {
              attribute_id: 'camera_chup_hinh_dep',
              attribute_name: 'Camera chụp hình đẹp',
              total_vote: 2,
              agree: 2,
              disagree: 0,
              no_idea: 0,
            },
            {
              attribute_id: 'do_phan_giai_sac_net',
              attribute_name: 'Độ phân giải sắc nét',
              total_vote: 2,
              agree: 2,
              disagree: 0,
              no_idea: 0,
            },
          ],
        },
        loading: false,
      },
      reviewDetail: {},
      commentImages: [],
      reviewCustomerInfo: {},
      reviewHubConfig: {
        tabIndex: 0,
        isEditReviewSuccess: false,
      },
      redirectByChat: false,
      responseSubmitReview: {},
      responseProductAttributes: [],
      recentReviewed: {},
      isLoadingPageSubmitReview: true,
      productDetail: {
        isLoading: true,
        data: {},
        isNotFoundProductDetailClient: false,
      },
      dataMultiReviews: {
        data: [],
        isLoading: true,
      },
    },
    account: {
      isLoading: false,
      accountAddress: [
        {
          country: 'Việt Nam',
          district: 'Quận Đống Đa',
          id: 14229446,
          customer_id: 8731995,
          full_name: 'lâm văn hùng',
          telephone: '0382463233',
          country_id: 'VN',
          region_tiki_code: 'VN034',
          region: 'Hà Nội',
          region_id: 297,
          city_id: 12,
          district_id: 12,
          city: 'Quận Đống Đa',
          city_tiki_code: 'VN034021',
          ward_id: 3606,
          ward: 'Phường Ngã Tư Sở',
          ward_tiki_code: 'VN034021009',
          delivery_time_type: null,
          company: null,
          street: 'Toà nhà Phương Đông, 324 Tây Sơn',
          is_default: true,
          is_default_1click: false,
          is_choosen: false,
          is_verified: 1,
          delivery_address_type: 'company',
          created_at: '2020-06-10 20:15:36',
          updated_at: '2022-10-20 16:38:57',
          geo_long: 105.82204,
          geo_lat: 21.00572,
        },
        {
          country: 'Việt Nam',
          district: 'Quận Nam Từ Liêm',
          id: 6105110,
          customer_id: 8731995,
          full_name: 'LÂM Văn Hùng',
          telephone: '0382463233',
          country_id: 'VN',
          region_tiki_code: 'VN034',
          region: 'Hà Nội',
          region_id: 297,
          city_id: 724,
          district_id: 724,
          city: 'Quận Nam Từ Liêm',
          city_tiki_code: 'VN034027',
          ward_id: 3709,
          ward: 'Phường Mỹ Đình 2',
          ward_tiki_code: 'VN034027005',
          delivery_time_type: null,
          company: null,
          street: 'Tòa Nhà Toyota Mỹ Đình',
          is_default: false,
          is_default_1click: false,
          is_choosen: false,
          is_verified: 1,
          delivery_address_type: 'home',
          created_at: '2019-01-18 21:10:01',
          updated_at: '2019-11-09 10:21:51',
          geo_long: 105.77962,
          geo_lat: 21.02894,
        },
        {
          country: 'Việt Nam',
          district: 'Huyện Phú Xuyên',
          id: 14183115,
          customer_id: 8731995,
          full_name: 'Lâm Văn Hùng',
          telephone: '0382463233',
          country_id: 'VN',
          region_tiki_code: 'VN034',
          region: 'Hà Nội',
          region_id: 297,
          city_id: 681,
          district_id: 681,
          city: 'Huyện Phú Xuyên',
          city_tiki_code: 'VN034009',
          ward_id: 3344,
          ward: 'Xã Nam Triều',
          ward_tiki_code: 'VN034009014',
          delivery_time_type: null,
          company: null,
          street: 'số nhà 24, đình vũ, thôn nam quất',
          is_default: false,
          is_default_1click: false,
          is_choosen: false,
          is_verified: 1,
          delivery_address_type: 'home',
          created_at: '2020-06-06 06:32:39',
          updated_at: '2021-08-22 16:09:43',
          geo_long: 105.92928,
          geo_lat: 20.74389,
        },
        {
          country: 'Việt Nam',
          district: 'Quận Đống Đa',
          id: 25407597,
          customer_id: 8731995,
          full_name: 'Nguyễn Thị Bích Ngọc',
          telephone: '0385057589',
          country_id: 'VN',
          region_tiki_code: 'VN034',
          region: 'Hà Nội',
          region_id: 297,
          city_id: 12,
          district_id: 12,
          city: 'Quận Đống Đa',
          city_tiki_code: 'VN034021',
          ward_id: 3606,
          ward: 'Phường Ngã Tư Sở',
          ward_tiki_code: 'VN034021009',
          delivery_time_type: null,
          company: null,
          street: 'Toà nhà Phương Đông, 324 Tây Sơn',
          is_default: false,
          is_default_1click: false,
          is_choosen: false,
          is_verified: 1,
          delivery_address_type: 'company',
          created_at: '2022-10-21 10:17:59',
          updated_at: null,
          geo_long: 105.82204,
          geo_lat: 21.00572,
        },
      ],
      clickedAddressId: -1,
      couponData: {},
      loading: true,
      orderDetail: {},
      errorDialog: {},
      dialog: {
        isImported: false,
        isOpen: false,
        type: 'info',
        style: {},
      },
      customerPaymentInfo: {},
      ogImageByOrder: '',
    },
  },
  bnpl: {
    partnerList: {
      data: {
        available_partners: {},
        register_partners: {},
      },
      isLoading: false,
      isProductLoading: false,
      errors: {},
      selectedPartner: '',
      config: {},
      isSubmittingPartner: false,
      submitPartnerError: {},
    },
    common: {
      data: {},
      isLoading: false,
      errors: {},
    },
    address: {
      data: [],
      isLoading: false,
      errors: {},
      isDeletingAddress: false,
      isGettingSelectedAddress: false,
      selectedAddressId: null,
      updateAddressErrors: {},
      isUpdatingCart: false,
      selectedErrors: {},
    },
    checkout: {
      cart: {},
      isLoading: false,
      errors: {},
      errorSection: {},
      createCartSuccess: false,
      shortCartInfo: {},
      isGettingGift: false,
      giftItemData: {
        data: [],
        meta: {},
      },
      isUpdatingGift: false,
      updateGiftAddOnErrors: {},
      groupSellerById: {},
      updateQuantity: 0,
      previousCartData: {},
    },
    onboarding: {
      onboardingStatusData: {},
      isLoadingStatus: false,
      errorsStatus: {},
      errors: {},
      isLoadingOnboardingUrl: false,
      data: {},
    },
    payment: {
      data: {},
      offers: [],
      selectedPartner: {},
      priceSummary: {},
      selectedOffer: {},
      isLoadingOffers: false,
      isGoingPayment: false,
      offerErrors: {},
      paymentErrors: {},
      result: {},
    },
    paymentWebview: {
      isGettingUrl: false,
      urlPaymentWebview: '',
      getUrlErrors: {},
      isGettingResultPayment: false,
      getResultErrors: {},
      paymentResult: {
        data: {},
        error: {},
        isLoading: false,
      },
    },
    statement: {
      statementData: {},
      errors: {},
      isLoadingStatementUrl: false,
    },
    coupon: {
      dataSeller: {},
      isLoadingSeller: false,
      errorSellers: {},
      platformCoupon: {},
      isLoadingPlatformCoupon: false,
      errorPlatforms: {},
    },
    tracking: {},
    promotion: {
      isLoadingPromotion: false,
      promotions: {
        methods: [],
      },
      promotionBanners: [],
      promotionBadges: {},
      promotionCondtions: {},
    },
  },
};
