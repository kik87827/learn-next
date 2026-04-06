import React from 'react';

export default function ProductDetailPage() {
  return <div>ProductDetailPage</div>;
}

export async function getServerSideProps(context) {
  console.log('## productId : ' + context.params.productId);
}
