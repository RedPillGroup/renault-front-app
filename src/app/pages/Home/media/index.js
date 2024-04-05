import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function CustomImageList() {
  const ListeLength = itemData.length;

  const calculateColsAndRows = (index) => {
    if (ListeLength === 1){
      return { cols: 2, rows: 1, height: '800px' };
    }
     else if (ListeLength === 2) {
      return { cols: 2, rows: 1, height: '400px' };
    } else if (ListeLength === 3 && index === 0) {
      return { cols: 2, rows: 1, height: '400px' };
    } else if (ListeLength === 3 && (index === 1 || index === 2)) {
      return { cols: 1, rows: 1, height: '400px' };
    } else if (ListeLength === 4) {
      return { cols: 1, rows: 1, height: '400px' };
    } else if (ListeLength === 5) {
      return { cols: 2, rows: 1, height: '160px' };
    } else {
      return { cols: 1, rows: 1, height: '250px' };
    }
  };

  return (
    <ImageList gap={5} style={{ marginTop: "5px" }}>
      {itemData.map((item, index) => {
        const { cols, rows, height } = calculateColsAndRows(index);
        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              src={item.img}
              alt={item.title}
              style={{ height: height }}
              loading="lazy"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://www.automobile-magazine.fr/asset/cms/1600x1000/194551/config/142397/le-teaser-du-concept-car-de-vehicule-a-hydrogene-renault.png',
    title: 'Renault 1',
  },
  {
    img: 'https://i.gifer.com/1FHn.gif',
    title: 'Renault 2',
  }, 
  {
    img: 'https://static.latribune.fr/2256810/kardian-renault.png',
    title: 'Sink',
  },
  {
    img: 'https://www.parismatch.com/lmnr/r/960,640,FFFFFF,forcex,center-middle/img/var/pm/public/styles/paysage/public/media/image/2022/03/01/03/Renault-devoile-sa-strategie-et-une-nouvelle-R5-electrique.jpg?VersionId=6kKxXLi1st.gnuPrGkm8dSU5vtEA9UtB',
    title: 'Kitchen',
  }, 
  {
    img: 'https://cdn.group.renault.com/ren/master/renault-new-cars/product-plans/r5/reveal/hero-zone/r5-overview-001-2-mobile-background-2.jpg.ximg.xsmall.jpg/9bb8a50a16.jpg',
    title: 'Blinds',
  }  
];
