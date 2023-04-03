import img1 from '../../images/ImageTemplates/tinhnang/img1.svg'
import img2 from '../../images/ImageTemplates/tinhnang/img2.svg'
import img3 from '../../images/ImageTemplates/tinhnang/img3.svg'
import img4 from '../../images/ImageTemplates/tinhnang/img4.svg'
import img5 from '../../images/ImageTemplates/tinhnang/img5.svg'
import img6 from '../../images/ImageTemplates/tinhnang/img6.svg'
import img7 from '../../images/ImageTemplates/tinhnang/img7.svg'

interface TempplateImgItem {
    id: Number;
    title: String;
    img:String;
}

export const TempplateImg: TempplateImgItem[] = [
    {
        id:1,
        title:"Business",
        img:img1
    },
    {
        id:2,
        title:"Thiết kế",
        img:img2
    },
    {
        id:3,
        title:"Giáo dục",
        img:img3
    },
    {
        id:4,
        title:"Kỹ thuật",
        img:img4
    },
    {
        id:5,
        title:"Marketing",
        img:img5
    },
    {
        id:6,
        title:"Quản lý dự án",
        img:img6
    },
    {
        id:7,
        title:"làm việc từ xa",
        img:img7
    },
]