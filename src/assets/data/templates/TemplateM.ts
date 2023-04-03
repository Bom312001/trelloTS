import img1 from '../../images/ImageTemplates/maumoi/anh2.jpg'
import img2 from '../../images/ImageTemplates/maumoi/anh3.svg'
import img3 from '../../images/ImageTemplates/maumoi/anh4.png'
import logoTrello from '../../images/ImageTemplates/logotrello.png'

interface TempplateMItem {
    id: Number;
    title: String;
    by: String;
    text: String;
    imgAvatar:String;
    img:String;
  }


export const TempplateM: TempplateMItem[] = [
    {
        id:1,
        imgAvatar: logoTrello,
        title:'New Hire Onboarding',
        by:'bởi Trello Team',
        text:'Help new employees start strong with this onboarding template.',
        img:img1
    },
    {
        id:2,
        imgAvatar: logoTrello,
        title:'Tier List',
        by:'bởi Trello Enginnering Team',
        text:'Use this template to create a tier list for anything you want. A tier list is a way to rank items in a category from best to worst. This could be: best NBA players, GOAT’d pasta dishes, and tastiest fast food joints.',
        img:img2
    },
    {
        id:3,
        imgAvatar: logoTrello,
        title:'Better Work Habits Challenge',
        by:'bởi Trello Team',
        text:'Track, reflect, and celebrate new effective habits that you want to build at work.',
        img:img3
    },
]