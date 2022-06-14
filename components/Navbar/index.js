import React from "react";
import {
  Flex,
  Spacer,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/react";
import styles from "./style.module.scss";
import {
  IoLocationSharp,
  IoMail,
  IoCall,
  IoSearch,
  IoChevronDown,
} from "react-icons/io5";
import { Icon } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <Flex className={styles["top-navbar"]}>
        <Spacer />
        <ul>
          <li>
            <Icon
              as={IoCall}
              style={{
                fontSize: 24,
                color: "var(--main-icon-color)",
              }}
            />
            <span>1234567890</span>
          </li>
          <li>
            <Icon
              as={IoMail}
              style={{
                fontSize: 24,
                color: "var(--main-icon-color)",
              }}
            />
            <span>test@gmail.com</span>
          </li>
          <li>
            <Icon
              as={IoLocationSharp}
              style={{
                fontSize: 24,
                color: "var(--main-icon-color)",
              }}
            />
            <span>Thanh Xuân</span>
          </li>
          <li>
            <Icon
              as={IoLocationSharp}
              style={{
                fontSize: 24,
                color: "var(--main-icon-color)",
              }}
            />
            <span>Hà Nội</span>
          </li>
        </ul>
        <Spacer />
        <InputGroup className={styles["input-search"]}>
          <Input />
          <InputRightAddon children={<Icon as={IoSearch} />} />
        </InputGroup>
        <Spacer />
      </Flex>
      <Flex className={styles["bottom-navbar"]}>
        <Spacer />
        <div className="main-logo">
          <Link href="/">
            <img
              style={{
                cursor: "pointer",
              }}
              src="https://nhakhoavietuc.com/wp-content/uploads/2018/11/LOGO-NhakhoaVietUc.png"
              layout="fill"
            />
          </Link>
        </div>
        <Spacer />
        <div className={styles["main-navigation"]}>
          <ul>
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            <li className={styles["introduction"]}>
              <Link href="/">
                <span>
                  Giới thiệu <Icon as={IoChevronDown} />
                </span>
              </Link>
              <ul
                className={`${styles["introduction-dropdown"]} ${styles["dropdown"]}`}
              >
                <li>
                  <Link href="/gioi-thieu-ve-nha-khoa">Giới thiệu về nha khoa Pastuer</Link>
                </li>
                <li>
                  <Link href="/co-so-vat-chat">Cơ sở vật chất</Link>
                </li>
                <li>
                  <Link href="/doi-ngu-bac-si">Đội ngũ bác sĩ</Link>
                </li>
              </ul>
            </li>
            <li className={styles["cosmetic"]}>
              <Link href="/">
                <span>
                  Nha khoa thẩm mĩ <Icon as={IoChevronDown} />
                </span>
              </Link>
              <div
                className={`${styles["cosmetic-dropdown"]} ${styles["dropdown"]}`}
              >
                <div className={styles["cosmetic-dropdown-header"]}>
                  <ul>
                    <li>Thẩm mỹ nụ cười</li>
                    <li>Chỉnh nha - Niềng răng</li>
                    <li>Điều trị cười hở lợi</li>
                    <li>Tẩy trăng răng</li>
                  </ul>
                </div>
                <div className={styles["cosmetic-dropdown-body"]}>
                  <ul>
                    <li>
                      <Link href="/boc-rang-su">Bọc răng sứ</Link>
                    </li>
                    <li>Phủ sứ veener toàn hàm</li>
                    <li>Đính đá kim cương </li>
                  </ul>
                  <ul>
                    <li>
                      <Link href="/quy-trinh-nieng-rang">
                        Quy trình niềng răng
                      </Link>
                    </li>
                    <li>
                      <Link href="/nieng-rang-trong-suot">
                        Niềng răng trong suốt
                      </Link>
                    </li>
                    <li>
                      <Link href="/nieng-rang-mac-cai">Niềng răng mắc cài</Link>
                    </li>
                    <li>Nhật ký niềng răng</li>
                  </ul>
                  <ul>
                    <li>Tiểu phẫu làm dài thân răng</li>
                    <li>Tiểu phẫu di chuyển đường cười</li>
                    <li>Kỹ thuật là giảm trương lực cơ nâng môi</li>
                  </ul>
                  <ul>
                    <li>Làm trăng răng tại nhà</li>
                    <li>Làm trắng răng tại phòng khám</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className={styles["cosmetic"]}>
              <Link href="/">
                <span>
                  Dịch vụ <Icon as={IoChevronDown} />
                </span>
              </Link>
              <div
                className={`${styles["cosmetic-dropdown"]} ${styles["dropdown"]}`}
              >
                <div className={styles["cosmetic-dropdown-header"]}>
                  <ul>
                    <li>Giải pháp cho mất răng</li>
                    <li>Bệnh răng miệng</li>
                    <li>Nha khoa cho trẻ em</li>
                  </ul>
                </div>
                <div className={styles["cosmetic-dropdown-body"]}>
                  <ul>
                    <li>Trồng răng Implant</li>
                    <li>Tư vấn công nghệ All on 4, All on 6</li>
                    <li>Công nghệ Implant Itech</li>
                    <li>Cầu răng</li>
                    <li>Hàm tháo lắp</li>
                  </ul>
                  <ul>
                    <li>Lấy cao răng</li>
                    <li>Nhổ răng số 8</li>
                    <li>Sâu răng</li>
                    <li>Nhổ răng thường</li>
                    <li>Tủy răng</li>
                    <li>Viêm lợi</li>
                  </ul>
                  <ul>
                    <li>Cạo vôi răng cho trẻ</li>
                    <li>Niềng răng cho trẻ</li>
                    <li>Nhổ răng sữa</li>
                    <li>Trám răng sâu cho bé</li>
                    <li>Trám bít nhổ răng</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <Link href="/">Tư vấn hình ảnh</Link>
            </li>
            <li>
              <Link href="/">Đặt lịch hẹn</Link>
            </li>
          </ul>
        </div>
        <Spacer />
      </Flex>
    </>
  );
}
