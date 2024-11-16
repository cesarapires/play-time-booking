import {
  FiHome,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { TbSoccerField } from 'react-icons/tb'
import { FaCalendarAlt } from 'react-icons/fa'
import { GiAmericanFootballPlayer } from 'react-icons/gi'

interface LinkItemProps {
  name: string;
  icon: IconType;
}

export const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Calendar', icon: FaCalendarAlt },
  { name: 'Courts', icon: TbSoccerField },
  { name: 'Customers', icon: GiAmericanFootballPlayer },
  // { name: 'Settings', icon: FiSettings },
]
