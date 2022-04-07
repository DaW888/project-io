# project-io

Użytkownik ma możliwość przeglądania oferty filmowej. Klikając w miniaturkę filmu, ma możliwość podglądu opisu filmu oraz jego ocen. Następnie klient wybiera datę, godzinę seansu oraz jego typ. W dalszej kolejności wybiera rodzaj biletu, ich ilość. Następnie pojawia się układ sali kinowej, gdzie użytkownik wybiera miejsca. Klient ma możliwość wyboru w pierwszej kolejności miejsc obok siebie, jeśli tylko jest taka możliwość. Następnie klient przechodzi do ekranu z formularzem danych, gdzie również wybiera rodzaj płatności obsługiwaną przez zewnętrznego operatora. Po sfinalizowaniu płatności, klient otrzymuje wiadomość z informacjami na temat płatności oraz pliki biletów. Na końcu pojawia się przycisk z możliwością powrotu do menu głównego.

![Use case diagram](diag.PNG)

## Opisy przypadków użycia

1. View movies — użytkownik ma możliwość przeglądania oferty filmowej, oraz filtrowania filmów.
2. Information about movie — użytkownik ma możliwość uzyskania informacji na temat filmu, jego opisu oraz ocen użytkowników. Może na tę stronę również dostać się za pomocą dokładnego linku.
3. Chose date and hours — użytkownik ma możliwość wyboru dokładnej daty oraz godziny rezerwacji seansu.
4. Chose tickets — użytkownik ma możliwość wyboru typu biletu (3d, 2d) oraz od razu widzi cenę biletu.
5. Seats — użytkownik ma możliwość wyboru miejsca w kinie, poprzez kliknięcie kwadratu z mapą kina
6. Purchase — użytkownik ma możliwość dokonania uiszczenia płatności za bilet poprzez wybranie formy płatności, dostarczonej przez zewnętrzny serwis 
7. Send email — użytkownik otrzymuje mail, po tym kiedy jego płatność została uiszczona oraz zweryfikowana po stronie kina, oraz zewnętrznego serwisu do dokonywania opłat.
