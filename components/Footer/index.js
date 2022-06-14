import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import { IoArrowForwardOutline } from "react-icons/io5";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <Flex className={[styles["main-footer"]]}>
      <Spacer />
      <div>
        <h3>Nha khoa Pasteur</h3>
        <p>Địa chỉ: 144 Xuân Thủy, Hà Nội</p>
        <p>
          <a
            href="https://goo.gl/maps/GSNSWhbzpdTmxTBGA"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Địa chỉ trực tiếp trên bản đồ{" "}
            <IoArrowForwardOutline
              style={{
                display: "inline",
              }}
            />
          </a>
        </p>
        <br />
        <p>Địa chỉ: 144 Xuân Thủy, Hà Nội</p>
        <p>
          <a
            href="https://goo.gl/maps/GSNSWhbzpdTmxTBGA"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Địa chỉ trực tiếp trên bản đồ{" "}
            <IoArrowForwardOutline
              style={{
                display: "inline",
              }}
            />
          </a>
        </p>
        <br />
        <p>Điện thoại: 0862.331.671</p>
        <p>Email: 19020411@vnu.edu.vn</p>
        <br />
        <h3>Thời gian làm việc</h3>
        <p>Thứ 2 - Thứ 7: 09h00 - 19h00</p>
        <p>Chủ nhật: 08h30 - 17h30</p>
      </div>
      <Spacer />
      <div>
        <div
          style={{
            margin: "15px auto",
          }}
        >
          <img
            style={{
              margin: "auto",
            }}
            src="https://nhakhoavietuc.com/wp-content/uploads/2018/11/LOGO-bottom.png"
          />
        </div>
        <p className={styles["center-text"]}>
          Copyright © Nha Khoa Pasteur. All rights reserved
        </p>
        <p className={styles["center-text"]}>
          Công ty TNHH chăm sóc Sức Khỏe Pasteur
        </p>
        <p className={styles["center-text"]}>
          Số ĐKKD 0107644367 do Sở KHĐT Tp. Hà Nội cấp ngày 09/05/2017
        </p>
        <p className={styles["center-text"]}>
          Người đại diện: Nguyễn Minh Quyết
        </p>
        <p className={styles["center-text"]}>
          Chính sách bảo mật - Chính sách chung
        </p>
        <div>
          <img
            src="https://nhakhoavietuc.com/wp-content/uploads/2018/12/da-thong-bao-1.png"
            style={{
              maxWidth: "400px",
            }}
          />
        </div>
      </div>
      <Spacer />
    </Flex>
  );
}
