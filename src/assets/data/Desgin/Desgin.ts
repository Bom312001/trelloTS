import img1 from '../../images/ImageThietke/img1.jpg'
import img2 from '../../images/ImageThietke/img2.jpg'
import img3 from '../../images/ImageThietke/img3.jpg'
import avatar1 from '../../images/ImageThietke/avatar1.png'
import avatar2 from '../../images/ImageThietke/avatar2.png'
import avatar3 from '../../images/ImageThietke/avatar3.png'

interface DesignItem {
    id: Number;
    title: String;
    by: String;
    text: String;
    imgAvatar:String;
    img:String;
  }


export const Desgin: DesignItem[] = [
    {
        id:1,
        imgAvatar: avatar1,
        title:'Design Project Template',
        by:'bởi Kene Ohiaeri, Product Designer',
        text:'An easy to use template for planning and monitoring your branding and product design projects online.',
        img:img1,
    },
    {
        id:2,
        imgAvatar: avatar2,
        title:'Design System Checklist',
        by:'bởi Rahul JR, Senior Product Manager @ Zoho Corp',
        text:'A design system unites product teams around a common visual language.',
        img:img2,
    },
    {
        id:3,
        imgAvatar: avatar3,
        title:'Freelance Branding Project',
        by:'bởi Stu Smith, Designer @ Trello',
        text:'Use this template to run your next Branding project.',
        img:img3,
    },
]