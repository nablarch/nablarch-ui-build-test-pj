<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ taglib prefix="field" tagdir="/WEB-INF/tags/widget/field" %>
<%@ taglib prefix="button" tagdir="/WEB-INF/tags/widget/button" %>
<%@ taglib prefix="link" tagdir="/WEB-INF/tags/widget/link" %>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags/template" %>
<%@ taglib prefix="tab" tagdir="/WEB-INF/tags/widget/tab" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

    <n:form>
      <tab:group name="tab">
        <c:if test="${not serverMode}">
          <tab:content title="クライアント" value="c">
            <span class="test-case">
              必須属性を全て指定
            </span>
            <button:block>
              <link:popup
                  label="ポップアップリンク"
                  uri=""
                  dummyUri="./index.jsp">
              </link:popup>
            </button:block>

            <span class="test-case">
              サーバサイドで設定する値も含めて全て設定した場合の動作
            </span>
            <button:block>
              <link:popup
                  label="リンク"
                  uri="hoge.jsp"
                  dummyUri="./index.jsp"
                  id="client-link-id"
                  cssClass="style"
                  popupOption="top=50, width=100, height=150"
                  popupWindowName="sub"
                  comment="コメント">
              </link:popup>
            </button:block>
          </tab:content>
        </c:if>

        <tab:content title="サーバ・クライアント共通" value="cs" selected="true">
          <span class="test-case id-test">
            idを指定しない場合、id属性が設定されないこと
          </span>
          <button:block>
            <link:popup
                label="戻る"
                uri="./index.jsp"
                dummyUri="./index.jsp">
            </link:popup>
          </button:block>

          <span class="test-case id-test">
            idにブランクを設定した場合、id属性が設定されないこと
          </span>
          <button:block>
            <link:popup
                label="戻る"
                uri="./index.jsp"
                dummyUri="./index.jsp"
                id="">
            </link:popup>
          </button:block>

          <span class="test-case id-test">
            idを設定した場合、そのidがid属性に設定されること
          </span>
          <button:block>
            <link:popup
                label="戻る"
                uri="./index.jsp"
                dummyUri="./index.jsp"
                id="link-id">
            </link:popup>
          </button:block>

          <span class="test-case cssClass-test">
            cssClassを設定しない場合、class属性が設定されないこと
          </span>
          <button:block>
            <link:popup
                label="戻る"
                uri="./index.jsp"
                dummyUri="./index.jsp">
            </link:popup>
          </button:block>

          <span class="test-case cssClass-test">
            cssClassにブランクを設定した場合、class属性が設定されないこと
          </span>
          <button:block>
            <link:popup
                label="戻る"
                uri="./index.jsp"
                dummyUri="./index.jsp"
                cssClass="">
            </link:popup>
          </button:block>

          <span class="test-case cssClass-test">
            cssClassを設定した場合、class属性にその値が設定されること
          </span>
          <button:block>
            <link:popup
                label="戻る"
                uri="./index.jsp"
                dummyUri="./index.jsp"
                cssClass="style">
            </link:popup>
          </button:block>


          <span class="test-case popupOption-test">
            popupOptionを指定しない場合、オプションなしでウィンドウが開かれること
          </span>
          <button:block>
            <link:popup
              label="Tweet"
              uri="./index.jsp"
              dummyUri="./index.jsp"
              cssClass="style"
              popupWindowName="name">
            </link:popup>
          </button:block>

          <span class="test-case popupOption-test">
            popupOptionにブランクを指定した場合、オプションなしでウィンドウが開かれること
          </span>
          <button:block>
            <link:popup
              label="Tweet"
              uri="./index.jsp"
              dummyUri="./index.jsp"
              cssClass="style"
              popupWindowName="name"
              popupOption="">
            </link:popup>
          </button:block>

          <span class="test-case popupOption-test">
            popupOptionを指定した場合、そのオプションでウィンドウが開かれること
          </span>
          <button:block>
            <link:popup
              label="Tweet"
              uri="./index.jsp"
              dummyUri="./index.jsp"
              cssClass="style"
              popupWindowName="subWithOption"
              popupOption="menubar=no, width=100, height=100">
            </link:popup>
          </button:block>
        </tab:content>

        <tab:content title="サーバサイド" value="s">
          <span class="test-case default_value-test">
            必須属性を全て指定
          </span>
          <button:block>
            <link:popup
              label="金融機関検索"
              uri="./index.jsp"
              popupWindowName="bank">
            </link:popup>
          </button:block>
        </tab:content>
      </tab:group>
    </n:form>
