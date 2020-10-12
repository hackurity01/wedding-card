import React, { useCallback, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import RefreshIcon from '@material-ui/icons/Refresh';
import makeStyles from '@material-ui/core/styles/makeStyles';
import styled from 'styled-components';

import pinImg from 'src/assets/imgs/icons/pin.svg';
import { Title } from 'src/components/Title';

declare global {
  interface Window {
    kakao: any;
  }
}

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 'auto',
  },
  icon: {
    fontSize: '1rem',
  },
}));

export const SectionMap = React.memo(() => {
  const [map, setMap] = useState<any>(null);
  const [lock, setLock] = useState<any>(false);

  useEffect(() => {
    if (map) map.setDraggable(lock);
  }, [lock, map]);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=09256705b75cfe2455e2c36f16741766&autoload=true';
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const maps = window.kakao.maps;
        let container = document.getElementById('map');
        const latlng = new maps.LatLng(36.7507405586091, 126.99229183249);
        let options = {
          center: latlng,
          level: 4,
          draggable: false,
          scrollwheel: false,
        };

        const map = new maps.Map(container, options);
        const pin = new maps.MarkerImage(pinImg, new maps.Size(29, 43), {
          offset: new maps.Point(14, 43),
          alt: '모나무르',
        });

        new maps.Marker({
          map: map,
          position: new maps.LatLng(36.7509905586091, 126.99229183249),
          image: pin,
        });

        var zoomControl = new maps.ZoomControl();
        map.addControl(zoomControl, maps.ControlPosition.RIGHT);

        setMap(map);
      });
    };
  }, []);

  const hadleInitMap = useCallback(() => {
    const maps = window.kakao.maps;
    map.setCenter(new maps.LatLng(36.7507405586091, 126.99229183249));
    map.setLevel(4);
  }, [map]);

  const handleLock = useCallback(() => {
    setLock(!lock);
  }, [lock]);

  const { icon, root } = useStyles();
  return (
    <SectionMapWrapper>
      <Title text={'오시는 길'} />
      <ButtonGroup>
        <Button classes={{ root }} variant="outlined" onClick={hadleInitMap}>
          <RefreshIcon className={icon} />
        </Button>
        <Button style={{ marginLeft: 5 }} classes={{ root }} variant="outlined" onClick={handleLock}>
          {lock ? <LockOpenIcon className={icon} /> : <LockIcon className={icon} />}
        </Button>
      </ButtonGroup>
      <div id={'map'} style={{ width: '100%', height: '210px' }} />
    </SectionMapWrapper>
  );
});

const SectionMapWrapper = styled.section`
  max-width: 500px;
  margin: auto;
  padding-top: 90px;
`;

const ButtonGroup = styled.div`
  text-align: right;
  padding: 5px 10px 10px 0;
`;
