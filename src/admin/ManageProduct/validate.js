export default function validate({ name, originalPrice, salePrice, category,
 img, info}) {
    let errors = {}
    if(!name) {
        errors.name = "상품명이 입력되지 않았습니다.";
    } 

    if(!originalPrice) {
        errors.originalPrice = "정가가 입력되지 않았습니다.";
    }

    if(!salePrice) {
        errors.salePrice = "판매가가 입력되지 않았습니다.";
    }

    if(!category) {
        errors.category = "상품 카테고리가 선택되지 않았습니다.";
    } else if (category === "default") {
        errors.category = "상품 카테고리가 선택되지 않았습니다.";
    }

    if(!img) {
        errors.img = "상품이미지가 없습니다.";
    }

    if(!info) {
        errors.info = "상품 설명이 없습니다.";
    }

    return errors;
}