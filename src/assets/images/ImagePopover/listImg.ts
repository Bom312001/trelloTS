import logoPopover from '../../images/anh1.jpg'
import logoPopover2 from '../../images/anh1.jpg'
import logoPopover3 from '../../images/anh1.jpg'
import logoPopover4 from '../../images/anh1.jpg'

interface ListImageItem {
    id: Number;
    image: String;
  }

export const listImage: ListImageItem[] = [
    {
        id:1,
        image:logoPopover,
    },
    {
        id:2,
        image:logoPopover2,
    },
    {
        id:3,
        image:logoPopover3,
    },
    {
        id:4,
        image:logoPopover4,
    },
]