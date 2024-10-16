import { ImageData } from './uiImages';
import { HiOutlineSpeakerphone } from '@react-icons/all-files/hi/HiOutlineSpeakerphone';
import { BsLayoutWtf } from '@react-icons/all-files/bs/BsLayoutWtf';
import { RiRemixiconLine } from '@react-icons/all-files/ri/RiRemixiconLine';
import { GiCircularSawblade } from '@react-icons/all-files/gi/GiCircularSawblade';
import { FaPaintBrush } from '@react-icons/all-files/fa/FaPaintBrush';
import { FaBrush } from '@react-icons/all-files/fa/FaBrush';
import { BiRestaurant } from '@react-icons/all-files/bi/BiRestaurant';

import { FaBandcamp } from '@react-icons/all-files/fa/FaBandcamp';
import { FaBattleNet } from '@react-icons/all-files/fa/FaBattleNet';
import { FaSkull } from '@react-icons/all-files/fa/FaSkull';
import { FaGlasses } from '@react-icons/all-files/fa/FaGlasses';
import { FaDiceD6 } from '@react-icons/all-files/fa/FaDiceD6';

import { FaChartPie } from '@react-icons/all-files/fa/FaChartPie';

export function myWork2Data(data) {
    return {
        data: [
            {
                id: 'sm',
                title: data.smMenuTilte,
                icon: <HiOutlineSpeakerphone size={50} />,
                imageFolder: ImageData('sm', 75),
                chip: 75,
            },
            {
                id: 'uiux',
                title: data.uiUxMenuTitle,
                icon: <BsLayoutWtf size={50} />,
                imageFolder: ImageData('ui', 43),
                chip: 43,
            },
            {
                id: 'identity',
                title: data.identityMenuTitle,
                icon: <FaBattleNet size={50} />,
                imageFolder: ImageData('Identity', 10),
                chip: 10,
            },

            {
                id: 'signboard',
                title: data.singBoardMEnuTitle,
                icon: <FaBandcamp size={50} />,
                imageFolder: ImageData('sinboard', 6),
                chip: 6,
            },
            {
                id: 'cnc',
                title: data.cncMenuTitle,
                icon: <GiCircularSawblade size={50} />,
                imageFolder: ImageData('cnc', 6),
                chip: 5,
            },
            {
                id: 'Character',
                title: data.Character,
                icon: <FaSkull size={50} />,
                imageFolder: ImageData('character', 10),
                chip: 10,
            },
            {
                id: 'Coverpage',
                title: data.Coverpage,
                icon: <FaGlasses size={50} />,
                imageFolder: ImageData('coverage', 2),
                chip: 2,
            },
            {
                id: 'Logo',
                title: data.Logo,
                icon: <RiRemixiconLine size={50} />,
                imageFolder: ImageData('logo', 28),
                chip: 28,
            },
            {
                id: 'flyer',
                title: data.flyer,
                icon: <FaPaintBrush size={50} />,
                imageFolder: ImageData('flyer', 59),
                chip: 59,
            },
            {
                id: 'infograph',
                title: data.infograph,
                icon: <FaChartPie size={50} />,
                imageFolder: ImageData('infograph', 11),
                chip: 11,
            },
            {
                id: 'menu',
                title: data.menu,
                icon: <BiRestaurant size={50} />,
                imageFolder: ImageData('menu', 9),
                chip: 9,
            },
            {
                id: 'package',
                title: data.package,
                icon: <FaDiceD6 size={50} />,
                imageFolder: ImageData('package', 5),
                chip: 5,
            },
            {
                id: 'poster',
                title: data.poster,
                icon: <FaBrush size={50} />,
                imageFolder: ImageData('poster', 4),
                chip: 4,
            },
        ],
    };
}
