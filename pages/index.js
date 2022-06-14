import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/Home.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, Spacer, Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div>
          <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/12/chua-cuoi-ho-loi-an-toan-ko-tai-phat.jpg" />
        </div>
        <div>
          <img src="https://nhakhoavietuc.com/wp-content/uploads/2019/04/uu-dai-cho-cong-nghe-trong-rang-Implant-itech.jpg" />
        </div>
        <div>
          <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/12/implant-all-on-46.jpg" />
        </div>
        <div>
          <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/12/trong-rang-Implant-Itech.jpg" />
        </div>
      </Carousel>
      <div className={styles["service-container"]}>
        <h1>Dịch vụ nha khoa Pasteur</h1>
        <Flex direction={"row"}>
          <Spacer />
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className={styles["service-first-col"]}>
              <Link href="/">
                <div
                  className={`${styles["service-item"]} ${styles["service-item-left"]}`}
                >
                  <p
                    className={`${styles["right-text"]} ${styles["bold-text"]}`}
                  >
                    Răng sứ thẩm mĩ
                  </p>
                  <p className={styles["right-text"]}>
                    Đem đến nụ cười rạng rỡ và hàm răng trắng sáng, không ảnh
                    hưởng đến sức khỏe răng miệng của bạn
                  </p>
                  <img
                    src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Icon-1.png"
                    className={styles["service-item-icon"]}
                  />
                </div>
              </Link>
              <Link href="/">
                <div
                  className={`${styles["service-item"]} ${styles["service-item-left"]}`}
                >
                  <p
                    className={`${styles["right-text"]} ${styles["bold-text"]}`}
                  >
                    Tẩy trắng răng
                  </p>
                  <p className={styles["right-text"]}>
                    Khắc phục tình trạng răng bị ố vàng, xỉn màu, đem đến cho
                    bạn một hàm răng trắng sáng
                  </p>
                  <img
                    src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Icon-2.png"
                    className={styles["service-item-icon"]}
                  />
                </div>
              </Link>
              <Link href="/">
                <div
                  className={`${styles["service-item"]} ${styles["service-item-left"]}`}
                >
                  <p
                    className={`${styles["right-text"]} ${styles["bold-text"]}`}
                  >
                    Trồng răng Implant
                  </p>
                  <p className={styles["right-text"]}>
                    Giúp bạn phục hồi răng mất giống như thật cả về phương diện
                    thẩm mỹ lẫn chức năng ăn nhai
                  </p>
                  <img
                    src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Icon-3.png"
                    className={styles["service-item-icon"]}
                  />
                </div>
              </Link>
              <Link href="/">
                <div
                  className={`${styles["service-item"]} ${styles["service-item-left"]}`}
                >
                  <p
                    className={`${styles["right-text"]} ${styles["bold-text"]}`}
                  >
                    Tiểu phẫu thuật
                  </p>
                  <p className={styles["right-text"]}>
                    Tiểu phẫu an toàn, không thiếu hổng tổ chức
                  </p>
                  <img
                    src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Icon-4.png"
                    className={styles["service-item-icon"]}
                  />
                </div>
              </Link>
            </div>
            <div className={styles["service-middle-col"]}>
              <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/anh-10-bs-fix.png" />
            </div>
            <div className={styles["service-last-col"]}>
              <div
                className={`${styles["service-item"]} ${styles["service-item-right"]}`}
              >
                <p className={`${styles["left-text"]} ${styles["bold-text"]}`}>
                  Niềng răng Invisalign
                </p>
                <p className={styles["left-text"]}>
                  Áp dụng công nghệ 3D mới nhất trong niềng răng invisalign, có
                  tính thẩm mỹ cao
                </p>
                <img
                  src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Icon-5.png"
                  className={styles["service-item-icon"]}
                />
              </div>
              <div
                className={`${styles["service-item"]} ${styles["service-item-right"]}`}
              >
                <p className={`${styles["left-text"]} ${styles["bold-text"]}`}>
                  Điều trị hở lợi
                </p>
                <p className={styles["left-text"]}>
                  An toàn và hiệu quả cao, khắc phục tình trạng cười hở lợi giúp
                  bạn tự tin trong sinh hoạt, giao tiếp
                </p>
                <img
                  src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Icon-6.png"
                  className={styles["service-item-icon"]}
                />
              </div>
              <div
                className={`${styles["service-item"]} ${styles["service-item-right"]}`}
              >
                <p className={`${styles["left-text"]} ${styles["bold-text"]}`}>
                  Nhổ răng khôn
                </p>
                <p className={styles["left-text"]}>
                  Nhổ răng an toàn, đúng tiêu chuẩn kỹ thuật, không đau, không
                  biến chứng
                </p>
                <img
                  src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Icon-7.png"
                  className={styles["service-item-icon"]}
                />
              </div>
              <div
                className={`${styles["service-item"]} ${styles["service-item-right"]}`}
              >
                <p className={`${styles["left-text"]} ${styles["bold-text"]}`}>
                  Chuẩn đoán hình ảnh
                </p>
                <p className={styles["left-text"]}>
                  Tư vấn tổng quan về nụ cười của bạn, các thông tin của bạn đều
                  được giữ bí mật
                </p>
                <img
                  src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Icon-8.png"
                  className={styles["service-item-icon"]}
                />
              </div>
            </div>
          </div>
          <Spacer />
        </Flex>
      </div>
      <div className={styles["deep-service-container"]}>
        <h1>Dịch vụ chuyên sâu</h1>
        <div className={styles["image-list"]}>
          <div>
            <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/ab304e6646d0a68effc1-1-344x480.png" />
          </div>
          <div>
            <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/e83a0b3a7f6f9c31c57e.png" />
            <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/c20b170a635f8001d94e.png" />
          </div>
          <div>
            <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/b2281e286a7d8923d06c.png" />
          </div>
          <div>
            <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/e6d7fed78a8269dc3093.png" />
            <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/9847e2479612754c2c03.png" />
          </div>
        </div>
      </div>
      <div className={styles["dental-know-container"]}>
        <h1>Kiến thức nha khoa</h1>
        <Flex>
          <Spacer />
          <div className={styles["detal-know-list"]}>
            <div className={styles["dental-know-item"]}>
              <div className={styles["header"]}>Bọc răng sứ</div>
              <div className={styles["body"]}>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/boc-rang-su.png" />
                  <p>Bọc răng sứ là gì</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/quy-trinh-boc-rang-su.png" />
                  <p>Quy trình bọc răng sứ</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/gia-boc-rang-su.png" />
                  <p>Giá bọc răng sứ</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/thoi-gian-boc-rang-su.png" />
                  <p>Dán sứ Veneer và những diều bạn cần biết</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/uu-diem-boc-rang-su.png" />
                  <p>Cách chăm sóc răng khi bọc răng sứ</p>
                </div>
              </div>
            </div>
            <div className={styles["dental-know-item"]}>
              <div className={styles["header"]}>Trồng răng - Implant</div>
              <div className={styles["body"]}>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Layer-46.png" />
                  <p>Implant là gì ? Ưu nhược điểm ra sao?</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Layer-47.png" />
                  <p>CÁCH CHĂM SÓC SAU KHI CẤY GHÉP IMPLANT</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Layer-48.png" />
                  <p> IMPLANT VÀ NHỮNG CÂU HỎI LIÊN QUAN</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Layer-49.png" />
                  <p> IMPLANT NGĂN NGỪA TIÊU XƯƠNG HÀM</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Layer-50.png" />
                  <p> SO SÁNH CÔNG NGHỆ IMPLANT VÀ LÀM CẦU RĂNG</p>
                </div>
              </div>
            </div>
            <div className={styles["dental-know-item"]}>
              <div className={styles["header"]}>Chỉnh nha - Niềng răng</div>
              <div className={styles["body"]}>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Layer-51.png" />
                  <p> TỔNG QUAN VỀ NIỀNG RĂNG TRONG SUỐT VÔ HÌNH</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Layer-52.png" />
                  <p> QUY TRÌNH THỰC HIỆN NIỀNG RĂNG TRONG SUỐT</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Layer-53.png" />
                  <p>QUY TRÌNH VỀ NIỀNG RĂNG HIỆU QUẢ</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Layer-54.png" />
                  <p> CÁCH CHĂM SÓC RĂNG MIỆNG KHI SỬ DỤNG</p>
                </div>
                <div className={styles["item"]}>
                  <img src="https://nhakhoavietuc.com/wp-content/uploads/2018/10/Layer-55.png" />
                  <p> 7 DẤU HIỆU VỀ RĂNG MÀ BẠN NÊN ĐI NIỀNG</p>
                </div>
              </div>
            </div>
          </div>
          <Spacer />
        </Flex>
      </div>
    </div>
  );
}
