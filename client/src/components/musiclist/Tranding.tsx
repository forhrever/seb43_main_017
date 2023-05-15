import React from 'react';
import styled from 'styled-components';
// import { atom } from 'recoil';
// import { useRecoilValue } from 'recoil';

/* 2023.05.08 MusicList Tranding 타입 선언 - 홍혜란 */
interface TrandingData {
    index: number;
    albumCover: string;
    songTitle: string;
    artistName: string;
}

const TrList: TrandingData[] = [
    {
        index: 1,
        albumCover: '/assets/ditto.png',
        songTitle: 'Ditto',
        artistName: 'Newjeans',
    },
    {
        index: 2,
        albumCover: '/assets/ditto.png',
        songTitle: 'Ditto',
        artistName: 'Newjeans',
    },
    {
        index: 3,
        albumCover: '/assets/ditto.png',
        songTitle: 'Ditto',
        artistName: 'Newjeans',
    },
    {
        index: 4,
        albumCover: '/assets/ditto.png',
        songTitle: 'Ditto',
        artistName: 'Newjeans',
    },
    {
        index: 5,
        albumCover: '/assets/ditto.png',
        songTitle: 'Ditto',
        artistName: 'Newjeans',
    },
    {
        index: 6,
        albumCover: '/assets/ditto.png',
        songTitle: 'Ditto',
        artistName: 'Newjeans',
    },
];

/* 2023.05.08 MusicList Tranding 상태관리(추후 수정) - 홍혜란 */
// const trListState = atom<TrandingData[]>({
//     key: 'trListState',
//     default: [],
// });
// const trList = useRecoilValue<TrandingData[]>(trListState);

const Trending = () => {
    const trList = TrList;

    return (
        <Container>
            <TrTitleContainer>
                <TrTitle>TRANDING</TrTitle>
            </TrTitleContainer>
            <ItemsContainer>
                {trList.map((data) => (
                    <Item key={data.index}>
                        <Image src={data.albumCover} alt={data.songTitle} />
                        <Title>{data.songTitle}</Title>
                        <Artist>{data.artistName}</Artist>
                    </Item>
                ))}
            </ItemsContainer>
        </Container>
    );
};

export default Trending;

/* 2023.05.08 MusicList Tranding (트랜딩 컨테이너) 컴포넌트 구현 - 홍혜란 */
const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    gap: 16px;
    padding: 16px 0;
    width: 100%;
    margin-top: 40px;
`;

/* 2023.05.08 MusicList Tranding (타이틀 컨테이너) 컴포넌트 구현 - 홍혜란 */
const TrTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

/* 2023.05.08 MusicList Tranding (타이틀) 컴포넌트 구현 - 홍혜란 */
const TrTitle = styled.div`
    font-size: 30px;
    color: hsl(0, 0%, 100%);
    margin: 20px 0px 20px 0px;
    font-family: 'Monoton', cursive;
    transform: translateY(30px);
    animation: movingtext 1s forwards 0.2s;
    @media (max-width: 700px) {
        display: none;
    }
`;

/* 2023.05.11 MusicList Tranding (리스트 나올 박스) 컴포넌트 구현 / slideIn 애니메이션 - 홍혜란 */
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
    opacity: 0;
    transform: translateX(-20px);
    animation: slideIn 1s ease-in-out forwards;

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

/* 2023.05.08 MusicList Tranding (트랜딩 리스트 컨테이너) 컴포넌트 구현 - 홍혜란 */
const ItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 1200px) {
        & ${Item}:nth-child(6) {
            display: none;
        }
    }
    @media screen and (max-width: 1100px) {
        & ${Item}:nth-child(5) {
            display: none;
        }
    }
    @media screen and (max-width: 1000px) {
        & ${Item}:nth-child(4) {
            display: none;
        }
    }
    @media screen and (max-width: 900px) {
        & ${Item}:nth-child(3) {
            display: none;
        }
    }
    @media screen and (max-width: 800px) {
        & ${Item}:nth-child(2) {
            display: none;
        }
    }
    @media screen and (max-width: 700px) {
        & ${Item}:nth-child(1) {
            display: none;
        }
    }
`;

/* 2023.05.08 MusicList Tranding (노래 앨범 커버) 컴포넌트 구현 - 홍혜란 */
const Image = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 10%;
    object-fit: cover;
`;

/* 2023.05.08 MusicList Tranding (노래 제목) 컴포넌트 구현 - 홍혜란 */
const Title = styled.p`
    font-size: 12px;
    color: hsl(0, 0%, 100%);
    font-weight: bold;
    margin-top: 10px;
`;

/* 2023.05.08 MusicList Tranding (노래 가수 이름) 컴포넌트 구현 - 홍혜란 */
const Artist = styled.p`
    font-size: 12px;
    color: hsl(0, 0%, 100%);
    margin-top: 8px;
`;
