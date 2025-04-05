
declare type CartType={

    _id: string
    user: string
    cartItems: CartItem[]
    discount: number
    totalPrice: number
    totalPriceAfterDiscount: number
    createdAt: string
    updatedAt: string
    __v: number
}


declare type CartItem={
    product: CartProduct
    price: number
    quantity: number
    _id: string
}


declare type CartProduct={
    _id: string
    title: string
    slug: string
    description: string
    imgCover: string
    images: string[]
    price: number
    priceAfterDiscount: number
    quantity: number
    category: string
    occasion: string
    createdAt: string
    updatedAt: string
    __v: number
    discount: number
    sold: number
    rateAvg: number
    rateCount: number
    id: string
}
