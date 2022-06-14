import React from "react";
import Head from "next/head";
import { Flex, Spacer } from "@chakra-ui/react";
import styles from "./style.module.scss";
import Link from "next/link";

export default function BracesProcedure() {
  return (
    <>
      <Head>
        <title>Quy trình niềng răng</title>
      </Head>
      <Flex>
        <Spacer />
        <div className={styles["container"]}>
          <h1
            style={{
              fontSize: "1.5rem",
            }}
          >
            Quy trình niềng răng như thế nào để đem đến kết quả tốt nhất?
          </h1>
          <p>
            <b>Quy trình niềng răng như thế nào, </b>
            có tuân thủ theo đúng kỹ thuật chỉnh nha hay không sẽ là yếu tố
            quyết định đến sự thành công của ca niềng răng. Để khắc phục được
            những khiếm khuyết của hàm răng như răng hô, vẩu, móm hay răng khấp
            khểnh, bạn cần phải trải qua một
            <b> quá trình niềng răng </b>
            bao gồm nhiều bước khác nhau. Hãy cùng nha khoa Pasteur tìm hiểu về
            quy trình chỉnh nha – niềng răng theo đúng tiêu chuẩn Châu Âu tại
            nha khoa Pasteur
          </p>
          <h1 className={styles["title"]}>Niềng răng là gì?</h1>
          <p>
            Trước khi tìm hiểu về quy trình niềng răng, chúng ta cùng tìm hiểu
            xem niềng răng là gì? Niềng răng hay còn gọi là chỉnh nha là phương
            pháp sử dụng khay niềng trong suốt hoặc niềng răng mắc cài để giúp
            răng dịch chuyển về đúng vị trí mong muốn.
          </p>
          <h1 className={styles["title"]}>Có những loại niềng răng nào?</h1>
          <p>
            Hiện nay, nha khoa Pasteur có 2 loại niềng răng chính là niềng răng
            mắc cài và niềng răng trong suốt:
          </p>
          <p>
            <b>– Niềng răng mắc cài có 4 loại:</b>
          </p>
          <p>+ Niềng răng mắc cài kim loại tiêu chuẩn của Mỹ.</p>
          <p>+ Niềng răng mắc cài kim loại tự buộc của Mỹ.</p>
          <p>+ Niềng răng mắc cài sứ tiêu chuẩn (mắc cài pha lê) của Mỹ.</p>
          <p>+ Niềng răng mắc cài sứ tự buộc (mắc cài pha lê) của Mỹ.</p>
          <p
            style={{
              margin: "10px 0",
            }}
          >
            Bạn có thể xem chi tiết về:{" "}
            <Link href="/">
              <b className={styles["blue-link"]}>Niềng răng mắc cài.</b>
            </Link>
          </p>
          <p>
            <b>– Niềng răng trong suốt:</b>
          </p>
          <p>+ Niềng răng trong suốt Invitech của Ý – Mỹ – Đức kết hợp</p>
          <p>+ Niềng răng trong suốt Invisalign của Mỹ.</p>
          <p
            style={{
              margin: "10px 0",
            }}
          >
            Bạn có thể xem chi tiết về:{" "}
            <Link href="/">
              <b className={styles["blue-link"]}>Niềng răng trong suốt.</b>
            </Link>
          </p>
          <h1 className={styles["title"]}>Quy trình niềng răng như thế nào?</h1>
          <p>
            Quá trình niềng răng của mỗi bệnh nhân có thể khác nhau tùy theo
            tình trạng răng của từng bệnh nhân. Tuy nhiên, quy trình chỉnh nha –
            niềng răng của mọi người hầu hết đều bao gồm các bước sau:
          </p>
          <p className={styles["step"]}>Bước 1: Khám lâm sàng ( miễn phí )</p>
          <p>
            – Trước khi bạn quyết định có nên niềng răng hay không, bác sĩ sẽ
            khám tổng quát để xem mức độ lệch lạc cũng như tình trạng bệnh lý
            hiện tại của bạn ra sao cũng như tư vấn cho bạn lựa chọn phương pháp
            niềng răng phù hợp. Đây là giai đoạn tiền chỉnh nha, khám và tư vấn
            tại nha khoa Pasteur là hoàn toàn miễn phí.
          </p>
          <p className={styles["step"]}>Bước 2: Cận lâm sàng</p>
          <p>
            – Sau khi đã khám tổng quát, nếu bạn muốn biết chính xác và cụ thể
            kế hoạch niềng răng của mình, bác sĩ sẽ tiến hành chụp phim x-quang
            và số hóa hàm răng, mặt trên phần mềm 3D, đo đạc và phân tích để lấy
            số liệu chính xác cho việc lên kế hoạch niềng răng – chỉnh nha.
          </p>
          <p className={styles["step"]}>Bước 3: Lập kế hoạch chỉnh nha</p>
          <p>
            – Kế hoạch chỉnh nha được hiểu đơn giản là đưa ra quá trình niềng
            răng của bạn ra sao, có phải nhổ răng hay không, có phải nong hàm
            hay không,… Kế hoạch niềng răng giống như kế hoạch xây một ngôi nhà
            vậy, nếu không tính toán và lựa chọn giải pháp tối ưu thì kết quả có
            thể không như mong muốn được, thậm chí có không ít trường hợp niềng
            rang tại nha khoa kém chất lượng niềng răng xong còn xấu hơn trước
            khi niềng. Vì thế, để đảm bảo kết quả niềng răng tối ưu và hoàn hảo
            nhất cho bệnh nhân, nha khoa Pasteur sẽ dựa vào dữ liệu hình ảnh
            chụp thực tế và mẫu hàm để lên kế hoạch về quá trình niềng răng cho
            bệnh nhân.
          </p>
          <p className={styles["step"]}>
            Bước 4: Nghe kế hoạch, ký hợp đồng và tiến hành niềng răng
          </p>
          <p>
            – Sau khi hội đồng chỉnh nha đã thống nhất và đưa kế hoạch niềng
            răng tốt nhất cho bạn, bác sĩ sẽ hẹn bạn đến nghe kế hoạch chi tiết
            về quá trình chỉnh nha của mình. Nếu bạn đồng ý với kế hoạch niềng
            răng bác sĩ đưa ra thì nha khoa sẽ tiến hành làm hợp đồng niềng răng
            cho bạn. Hợp đồng này để đảm bảo quyền lợi cho bạn, kết quả niềng
            răng sẽ diễn ra theo đúng kế hoạch mà bác sĩ đưa ra cho bạn. Đồng
            thời, nếu trong quá trình niềng răng, bạn phải đi công tác xa trong
            thời gian dài, kế hoạch niềng răng của bạn có thể tiếp tục được sử
            dụng tại bất kỳ nha khoa nào khác ở cả trong và ngoài nước mà không
            phải mất thời gian niềng răng lại từ đầu.
          </p>
          <p>
            – Ký hợp đồng niềng răng xong, bạn có thể gắn mắc cài luôn đối với
            phương pháp chỉnh nha mắc cài. Còn với chỉnh nha trong suốt, bạn sẽ
            đợi từ 1 – 2 tuần, để nha khoa sản xuất khay niềng cho bạn. Sau đó,
            bạn sẽ đến lấy khay và bắt đầu quy trình niềng răng của mình.
          </p>
          <p className={styles["step"]}>Bước 5: Tái khám định kỳ</p>
          <p>
            – Bác sĩ phụ trách chỉnh nha cho bạn sẽ đặt lịch hẹn tái khám định
            kỳ để theo dõi và điều chỉnh theo kế hoạch. Thường 1 – 2 tháng, bạn
            sẽ đến nha khoa tái khám 1 lần.
          </p>
          <p>
            – Điểm đặc biệt khi niềng răng tại nha khoa Pasteur đó là chúng tôi
            có hồ sơ bệnh án điện tử cho bạn. Bạn và gia đình có thể theo dõi
            quá trình dịch chuyển răng của mình theo từng giai đoạn qua hồ sơ
            chỉnh nha điện tử mà không phải đến trực tiếp nha khoa.
          </p>
          <p className={styles["step"]}>
            Bước 6: Hoàn thiện và đeo hàm duy trì
          </p>
          <p>
            – Sau khi kết thúc quy trình chỉnh nha, bạn sẽ được đeo hàm duy trì
            dạng khay máng trong suốt để giúp duy trì khớp cắn và ổn định vị trí
            răng sau khi dịch chuyển về vị trí mới.
          </p>
          <p>
            – Thời gian đeo hàm duy trì có thể từ 3 đến 6 tháng theo cơ địa của
            từng bệnh nhân.
          </p>
          <p className={styles["step"]}>
            Bước 7: Kết thúc quá trình chỉnh nha, tái khám kiểm tra sau mỗi 3
            hoặc 6 tháng
          </p>
          <p>
            – Sau khi hoàn tất việc đeo hàm duy trì, bạn sẽ đến nha khoa tái
            khám sau 3 – 6 tháng. Tái khám định kỳ tại nha khoa là hoàn toàn
            miễn phí!
          </p>
          <p>
            Thời gian niềng răng thông thường sẽ kéo dài từ 1 – 2 năm, thời gian
            này phụ thuộc nhiều vào tình trạng răng của từng bệnh nhân, sự hợp
            tác với bác sỹ cũng như trình độ chuyên môn của bác sỹ. Nhưng không
            phải địa chỉ nha khoa nào cũng có thể cam kết thời gian niềng răng
            đúng như kế hoạch cũng như kết quả thẩm mỹ cuối cùng cho bệnh nhân
            như tại nha khoa Pasteur
          </p>
        </div>
        <Spacer />
      </Flex>
    </>
  );
}
