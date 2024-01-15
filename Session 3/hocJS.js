function validate(){
    var hoTen;
    hoTen = "Lê Minh Quân";
    document.write("<h2>hoTen+\" Validate progress...\"</h2>");
}

function doiTyGiaEURToUSD(e){
    const tyGia = 1.3;
    return e*tyGia;
}

function TaoBang(soHang, soCot){
    document.write("<table width=100% border=1>");
    for (i = 0; i < soHang; i++) {
        document.write("<tr>");
        for(j = 0; j < soCot; j++){
            document.write("<td>");
            document.write(j+":"+i);
            document.write("</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}