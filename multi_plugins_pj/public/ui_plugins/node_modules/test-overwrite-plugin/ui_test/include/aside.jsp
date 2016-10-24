<%@ page language="java" pageEncoding="UTF-8" %>
<%@ taglib prefix="n" uri="http://tis.co.jp/nablarch" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="link" tagdir="/WEB-INF/tags/widget/link" %>

<n:form>
<%-- デモPJ用のaside --%>
<div class="nablarch_TreeMenu -name asideMenu">
<n:plainHidden name="asideMenu"/>

<h3 id="sampleMenu1" class="menu_title"><i class=""></i>サンプルレイアウト1</h3>
<ul class="menu_folder -title sampleMenu1">
  <li>
    <link:submit
      uri="./index.jsp"
      dummyUri="./index.jsp"
      label="デモPJ用">
      <i class="fa fa-list-alt"></i>
    </link:submit>
  </li>

</ul>
</div>
</n:form>
