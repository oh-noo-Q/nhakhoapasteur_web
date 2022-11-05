import React from 'react';
import { Flex, Spacer } from '@chakra-ui/react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import styles from './style.module.scss';

export default function Footer() {
  return (
    <Flex className={[styles['main-footer']]}>
      <Spacer />
      <div>
        <h3>Nha khoa Pasteur</h3>
        <p>Địa chỉ: 115 Nguyễn Văn Trỗi, Phương Liệt, Thanh Xuân</p>
        <p>
          <a
            href="https://www.google.com/maps/place/115+P.Nguy%E1%BB%85n+V%C4%83n+Tr%E1%BB%97i,+Ph%C6%B0%C6%A1ng+Li%E1%BB%87t,+Thanh+Xu%C3%A2n,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@20.9865252,105.8362319,17z/data=!4m6!3m5!1s0x3135ac6713785bb9:0x25fdaf33e362ba33!8m2!3d20.9865252!4d105.8362319!16s%2Fg%2F11c1_8cksj?hl=vi-VN"
            target="_blank"
            style={{ textDecoration: 'underline' }}
          >
            Địa chỉ trực tiếp trên bản đồ{' '}
            <IoArrowForwardOutline
              style={{
                display: 'inline',
              }}
            />
          </a>
        </p>
        <br />
        <br />
        <p>Điện thoại: 0868.610.203</p>
        <p>Email: pasteurdental@gmail.com</p>
        <br />
        <h3>Thời gian làm việc</h3>
        <p>Thứ 2 - Thứ 7: 09h00 - 19h00</p>
        <p>Chủ nhật: 08h30 - 17h30</p>
      </div>
      <Spacer />
      <div>
        <div
          style={{
            margin: '20px auto',
          }}
        >
          <img
            style={{
              margin: 'auto',
              width: 220,
              aspectRatio: 526 / 181,
            }}
            src={'/logo.png'}
          />
        </div>
        <p className={styles['center-text']}>
          Copyright © Nha Khoa Pasteur. All rights reserved
        </p>
        <p className={styles['center-text']}>
          Chính sách bảo mật - Chính sách chung
        </p>
        <div style={{ marginTop: 20 }}>
          <img
            src="https://nhakhoavietuc.com/wp-content/uploads/2018/12/da-thong-bao-1.png"
            style={{
              maxWidth: '400px',
            }}
          />
        </div>
      </div>
      <Spacer />
    </Flex>
  );
}
