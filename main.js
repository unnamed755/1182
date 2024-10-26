alert("Hozir sizda random sonlar chiqadi")
const random = Math.round(Math.random() * 100)
alert(`random raqam: ${random}`)
alert("biz random sonni 2 kopaytiramiz va bolamiz")
alert(`random raqam ${random} edi
biz random sonni 2 ga kopaytirganimizda  ${random * 2 } soni chiqti 
biz random sonni 2 ga bolganimizda  ${random / 2 } soni chiqti 
biz random sonni 2 ga qoshganimizda  ${random + 2 } soni chiqti
biz random sonni 2 dan ayirganimizda  ${random - 2 } soni chiqti
biz random sonni 2 ga mudulli bolganimizda   ${random % 2 } soni chiqti`)
