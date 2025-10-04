import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
      <Link href="/" className="inline-flex items-center">
        <div className="overflow-hidden rounded-xl"> {/* efek melingkar */}
          <Image
            src="/logo/GroceryStore.webp" // dari folder public/images/logo
            alt="Logo"
            width={100}  // agak melebar
            height={20} // sedikit lebih tinggi dari semula
            className="object-cover transition-transform duration-300 hover:scale-100"
            priority
          />
        </div>
      </Link>
  )
}

export default Logo
