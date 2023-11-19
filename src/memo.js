//Dùng để ghi nhớ các props của một component, quyết định xem có render lại component đó hay không để tối ưu về hiệu năng.
// Ngắn gọn React.memo dùng để xử lý component tránh re-render trong tình huống không cần thiết.
//sử dụng nếu components sử dụng nhiều prop

import { memo } from "react";

function Memo() {

    return (
        <div>
            <h1>HELLO</h1>
        </div>
    )
}

export default memo(Memo)