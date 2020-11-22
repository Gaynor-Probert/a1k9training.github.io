<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="utf-8" indent="yes" />

	<xsl:template match="/">
		<div class="page-header">
		    <h4>Frequently Asked Questions</h4>
		</div>
		<div class="panel-group" id="accordion">
			<xsl:apply-templates select="//faq"/> 
		</div>
	</xsl:template>	

	<xsl:template match="faq"> 
	  <xsl:variable name="pos" select="position()"/>
	  <div class="panel panel-default">
	    <div class="panel-heading">
	      <h4 class="panel-title">
	        <a data-toggle="collapse" data-parent="#accordion" href="#collapse_{$pos}">
	          <strong>Q<xsl:value-of select="$pos"/>:</strong> <xsl:value-of select="./q" disable-output-escaping="yes" />
	        </a>
	      </h4>
	    </div>
	    <div id="collapse_{$pos}" class="panel-collapse collapse">
	      <div class="panel-body">
	        <span class="label label-info">Answer:</span> <xsl:value-of select="./a" disable-output-escaping="yes" />
	      </div>
	    </div>
	  </div>
	</xsl:template>
</xsl:stylesheet>


