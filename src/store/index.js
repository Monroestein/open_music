import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    funk:[
      {
        id:1,
        artist:"Aretha Franklin With The Ray Bryant Combo",
        category: "funk",
        album:"Aretha",
        front_image: "https://i.discogs.com/vyVLcf15RD983umuca0gKvDx1VjRssx1XQ2F9GUKaqI/rs:fit/g:sm/q:90/h:475/w:475/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNzAy/NTM4LTE1MDQ4OTI1/MDEtOTU0MS5qcGVn.jpeg",
        back_image:"https://i.discogs.com/CQz7uzmJO7n8tJ4jvMvfWszDGEbd-xFo9LFJIoFJV-I/rs:fit/g:sm/q:90/h:475/w:475/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwNzAy/NTM4LTE1MDQ4OTI1/MTktNzY2OS5qcGVn.jpeg"
      },
      {
        id:2,
        artist:"Marvin Gaye & Tammi Terrell",
        category: "funk",
        album:"United",
        front_image: "https://i.discogs.com/3QGXWM836inqh8d2fPCB3r3bO1NgRb0Ps7bkDL_UQIA/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ3ODgz/MTQtMTM3NTU1NDIx/MC02MjU2LmpwZWc.jpeg"
      },
      {
        id:3,
        artist:"Michael Jackson",
        category: "funk",
        album:"Thriller",
        front_image: "https://i.discogs.com/dWe2AyguSxJpaaEWbK_mVLL3zs2ejuta0sJCx5BvS8o/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5MTEy/OTMtMTU5NDI0NTgx/Mi03OTMxLmpwZWc.jpeg"
      },
      {
        id:4,
        artist:"Amy Winehouse",
        category: "funk",
        album:"Back To Black",
        front_image: "https://i.discogs.com/syRCX8NaLwK2SMk8X6TVU_DWc8RRqE4b-tebAQ6kVH4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgyNTQz/OC0xNjE3ODE0NDI2/LTU1MjUuanBlZw.jpeg"
      }
    ],
    grunge:[
      {
        id:5,
        artist:"Pearl Jam",
        category: "grunge",
        album:"Ten",
        front_image: "https://i.discogs.com/jsJx2_Tj7LF6XUlhHPxyaTYohtRQVUtWuf69RvCFdJ0/rs:fit/g:sm/q:90/h:599/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NzY2/NC0xNzE0OTIwNzgw/LTIzNDIuanBlZw.jpeg"
      },
      {
        id:6,
        artist:"Nirvana",
        category: "grunge",
        album:"Nevermind",
        front_image: "https://i.discogs.com/XoAXkLe03Vk0Kt-oQqw7V9uW5nBzQdNvZd0zar5mOiQ/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NzA4/NC0xMjYzMDk1NTUz/LmpwZWc.jpeg"
      },
      {
        id:7,
        artist:"Nirvana",
        category: "grunge",
        album:"In Utero",
        front_image: "https://i.discogs.com/ijIUNhH--0OKzKuKv-aLpgFkb7lr6OQVb5FcAF_aW0U/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM3NTk3/OS0xNDkxNzAwMzQ3/LTcyNjMuanBlZw.jpeg"
      },
      {
        id:8,
        artist:"Alice In Chains",
        category: "grunge",
        album:"Dirt",
        front_image: "https://i.discogs.com/EMkV9WFSl2K17x99b9OlfCs4td338IEk1QLKxWAwrsc/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3NDUw/OTQtMTQ2MDgxMjAy/MS04MjU0LmpwZWc.jpeg"
      },
      {
        id:9,
        artist:"Soundgarden",
        category: "grunge",
        album:"Superunknown",
        front_image: "https://i.discogs.com/A63fuqUmkMRBxIuwmyl2zDr4Q--50AYTug0u-iNXrDs/rs:fit/g:sm/q:90/h:599/w:599/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwOTM0/OC0xMTUwNTY3MjY2/LmpwZWc.jpeg"
      },
      {
        id:10,
        artist:"Stone Temple Pilots",
        category: "grunge",
        album:"Purple",
        front_image: "https://i.discogs.com/ryPyQPbyEU7dAQ3ebNSj5X8-cAkWEFOU1Gx0xezUROs/rs:fit/g:sm/q:90/h:546/w:558/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyODM2/NTMtMTIzMDczMDcy/NC5qcGVn.jpeg"
      },
      {
        id:11,
        artist:"Stone Temple Pilots",
        category: "grunge",
        album:"Core",
        front_image: "https://i.discogs.com/Ja9vadef_qUkWfWUAnJ8n5KtWGMWsZ6wiuNsd6C26Jo/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NzU2/My0xNTI2OTQ3MTcw/LTc4OTkuanBlZw.jpeg"
      },
    ],
    metal:[
      {
        id:12,
        artist:"Slipknot",
        category: "metal",
        album:"Vol. 3: (The Subliminal Verses)",
        front_image: "https://i.discogs.com/reDvZwpDUkYKsZPmUVhD3vvtW6boUBwIz7o50wMTXq4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4MjYz/NDYtMTYyNDI4NzA5/NC04ODIwLmpwZWc.jpeg"
      },
      {
        id:13,
        artist:"Pantera",
        category: "metal",
        album:"Cowboys From Hell",
        front_image: "https://i.discogs.com/jeWfmi1eK-d4Xvw61jiwEJRMvxsX30685UGnL7aqpIg/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2NzMw/MS0xNjEwNTYwNjE0/LTg1NzMuanBlZw.jpeg"
      },
      {
        id:14,
        artist:"System Of A Down",
        category: "metal",
        album:"Toxicity",
        front_image: "https://i.discogs.com/ZNHCc_2QjdbFftseh84ploWB6C0dx2YMnkVmcszXCYA/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwODM0/Ni0xMTkxMDMyMjU0/LmpwZWc.jpeg"
      },
      {
        id:15,
        artist:"Avenged Sevenfold",
        category: "metal",
        album:"City Of Evil",
        front_image: "https://i.discogs.com/od8xCb8lIt0YhhgmCXHeLdBD7yz5mj31ULLK-VibjmM/rs:fit/g:sm/q:90/h:600/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4Nzc1/MTAtMTQ3OTkzOTA5/NC03Mzc2LmpwZWc.jpeg"
      },
      {
        id:16,
        artist:"Avenged Sevenfold",
        category: "metal",
        album:"Avenged Sevenfold",
        front_image: "https://i.discogs.com/Ccg7adk5YhJkJEgConJnI_KvwlkPAFlZk2NV9ETJZ4M/rs:fit/g:sm/q:90/h:594/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE1NTI5/MTgtMTM4NzczMDgw/Ni0zMDA4LmpwZWc.jpeg"
      },
      {
        id:17,
        artist:"Rammstein",
        category: "metal",
        album:"Rosenrot",
        front_image: "https://i.discogs.com/MIH3Lkf7Sl6im9pJuJwkj3TLRyr4aLUcr7Ts24Tv508/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY0NDgx/MC0xMzk5NzAwMDMy/LTg2NzEuanBlZw.jpeg"
      },
      {
        id:18,
        artist:"Korn",
        category: "metal",
        album:"Follow The Leader",
        front_image: "https://i.discogs.com/hVvVvZeqxyFmy1zv5WNhhORdLSI1qP95ycOO3Ep3tMg/rs:fit/g:sm/q:90/h:496/w:501/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY1NTEw/OS0xMTUyODI2NDU4/LmpwZWc.jpeg"
      },
      {
        id:19,
        artist:"Motörhead",
        category: "metal",
        album:"Ace Of Spades",
        front_image: "https://i.discogs.com/P5n_UgM4jxLXVgQJWUvc_sRv_UtXXix8jl0wRcuSd8c/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgwNzU2/Ni0xNjUyMTk0MjYz/LTkyMTguanBlZw.jpeg"
      },
      {
        id:20,
        artist:"Korn",
        category: "metal",
        album:"The Nothing",
        front_image: "https://i.discogs.com/LDF2pCdwM3iGEOWLAQ0UWbg2pggQgb_6D32uwWG4_Bs/rs:fit/g:sm/q:90/h:531/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MTY0/NTA2LTE1NjkxNDAz/OTItNDQzOC5qcGVn.jpeg"
      },
    ],
    pop:[
      {
        id:21,
        artist:"Madonna",
        category: "pop",
        album:"True Blue",
        front_image: "https://i.discogs.com/CmjuBR46ZVzDrwGTCBm6sWXt0A4Zh-lOPaK0x2w-YuM/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU5NzIy/Mi0xNDE4ODg2Mzg0/LTQzMzUuanBlZw.jpeg"
      },
      {
        id:22,
        artist:"Michael Jackson",
        category: "pop",
        album:"Dangerous",
        front_image: "https://i.discogs.com/8fq8uDyknFsIfHmZXEE8sOJJjDNrAcWypXE7A2lC1rw/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE3MzQx/NzItMTU0MTA5Nzc5/OS05NjE5LmpwZWc.jpeg"
      },
      {
        id:23,
        artist:"Cyndi Lauper",
        category: "pop",
        album:"She's So Unusual",
        front_image: "https://i.discogs.com/z-n16sHeXVYi-T4161WF8OgyUpRszMfvN-VtUZnptS0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MDY1/NTAtMTI3NDY3OTcy/Mi5qcGVn.jpeg"
      },
      {
        id:24,
        artist:"Elton John",
        category: "pop",
        album:"Goodbye Yellow Brick Road",
        front_image: "https://i.discogs.com/YJ7O07cWNbT0-sEKfoDT-m93yCjbcaYwYJvmOSAJ2Sc/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYzMzkz/NTktMTQ1NTYyNzI0/My01OTg2LmpwZWc.jpeg"
      },
      {
        id:25,
        artist:"Gwen Stefani",
        category: "pop",
        album:"Love.Angel.Music.Baby",
        front_image: "https://i.discogs.com/08koqcWY6kVjxRAKunMasJXnjgDc0eFqfeW5-Y-Hm4c/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM1Mjg2/MS0xMjgzMDQ2MzA3/LmpwZWc.jpeg"
      },
    ],
    hiphop:[
      {
        id:26,
        artist:"Tupac",
        category: "hiphop",
        album:"All Eyez On Me",
        front_image: "https://i.discogs.com/Za3tLn3OKkor1P1QYomKADXinr41wCBaxJZcGaLZhPY/rs:fit/g:sm/q:90/h:592/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIzODM2/OS0xNjUwODE4MzMw/LTg1OTkuanBlZw.jpeg"
      },
      {
        id:27,
        artist:"Snoop Dogg",
        category: "hiphop",
        album:"Paid Tha Cost To Be Da Bo$$",
        front_image: "https://i.discogs.com/5xkrtC-8uonpOxicihcOa10h4Efv6ExdaaomazZBC44/rs:fit/g:sm/q:90/h:600/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM0MjQ3/NC0xNTc1NDE3MTMz/LTE0ODMuanBlZw.jpeg"
      },
      {
        id:28,
        artist:"Kendrick Lamar",
        category: "hiphop",
        album:"DAMN.",
        front_image: "https://i.discogs.com/n9BtVuF-dJtmghgg5MhBtN_nME-Wqb4SboSfeBxnWVE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwMTMz/NTM4LTE0OTIyMDQ5/NjMtMzE5Ni5qcGVn.jpeg"
      },
      {
        id:29,
        artist:"Eminem",
        category: "hiphop",
        album:"Encore",
        front_image: "https://i.discogs.com/VtGSHOR4_iRvx_8qdxApEiwVCLYQNzYZbP7Ebvd7A10/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE5MDQ5/Mzc3LTE2MjMwNjg0/MjUtMjk1Mi5qcGVn.jpeg"
      },
    ],
    rock:[
      {
        id:30,
        artist:"Foo Fighters",
        category: "rock",
        album:"There Is Nothing Left To Lose",
        front_image: "https://i.discogs.com/5XRJEDLHGhpn0SosG3B3zFwSHbRZj4lIixhafwioIgY/rs:fit/g:sm/q:90/h:534/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUwMDc3/NjAtMTU1NjczMTY2/NC03NjgxLmpwZWc.jpeg"
      },
      {
        id:31,
        artist:"Kiss",
        category: "rock",
        album:"Dressed To Kill",
        front_image: "https://i.discogs.com/WNxxR0Cey9-A9tJky6fc1F0EVCM0V4YBu_HKon4q5UA/rs:fit/g:sm/q:90/h:593/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTY4ODI2/Ny0xNDIwMjQ5MjM5/LTkwNjQuanBlZw.jpeg"
      },
      {
        id:32,
        artist:"AC/DC",
        category: "rock",
        album:"If You Want Blood You've Got It",
        front_image: "https://i.discogs.com/XegGK0NQl5Xl4Pvl9WvuHdeLNS-uXh2ZSBEttbnCfY0/rs:fit/g:sm/q:90/h:598/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQwMDU3/OS0xNzIwNjMxMDI5/LTQwNzQuanBlZw.jpeg"
      },
      {
        id:33,
        artist:"Deep Purple",
        category: "rock",
        album:"Deep Purple In Rock",
        front_image: "https://i.discogs.com/RNPeeMboy3HAKWTlEytiYGGBaz8LzFu3kgIAKQcW-Zk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4NDky/OTEtMTM0MDg4NzY3/MC02ODQ4LmpwZWc.jpeg"
      },
      {
        id:34,
        artist:"Guns N' Roses",
        category: "rock",
        album:"G N' R Lies",
        front_image: "https://i.discogs.com/wpIMT03melQ6rB0jAd2pztpGFPCMxuh5Ue2jnLjfImQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0MDI0/OC0xNDM0NzQ1NDE4/LTQwNTIuanBlZw.jpeg"
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
