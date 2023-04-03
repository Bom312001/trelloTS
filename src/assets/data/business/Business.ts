import img1 from '../../images/ImageBusiness/img1.png'
import img2 from '../../images/ImageBusiness/img2.jpg'
import img3 from '../../images/ImageBusiness/img3.jpg'
import avatar1 from '../../images/ImageBusiness/avatar1.png'
import avatar2 from '../../images/ImageBusiness/avatar2.png'
import avatar3 from '../../images/ImageBusiness/avatar3.png'


interface BusinessItem {
    id: Number;
    title: String;
    by: String;
    text: String;
    imgAvatar:String;
    img:String;
  }


export const Business:BusinessItem[] = [
    {
        id:1,
        imgAvatar: avatar1,
        title:'A Lead Management Pipeline by Crmble',
        by:'bởi Toni, Founder @ Crmble	',
        text:'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        img:img1,
    },
    {
        id:2,
        imgAvatar: avatar2,
        title:'Lean Canvas',
        by:'bởi Syarfandi Achmad',
        text:'Lean Canvas is a 1-page business plan template created by Ash Maurya that helps you deconstruct your idea into its key assumptions. ',
        img:img2,
    },
    {
        id:3,
        imgAvatar: avatar3,
        title:'Grant Tracking Template',
        by:'bởi Shahzeb Irshad, Grants, Strategy and Project Management Specialist',
        text:'Track grant funding opportunities for your non profit organization or social enterprise.',
        img:img3,
    },
]