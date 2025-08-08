import { Injectable } from '@nestjs/common';
import { CreateNanjiuDto } from './dto/create-nanjiu.dto';
import { UpdateNanjiuDto } from './dto/update-nanjiu.dto';
import axios from 'axios';
const cheerio = require('cheerio');

@Injectable()
export class NanjiuService {
  create(createNanjiuDto: CreateNanjiuDto) {
    return 'This action adds a new nanjiu';
  }

 async scanImage() {
    try {
    // 1. 获取网页HTML
    const url = 'https://h5.if.qidian.com/new/welfareCenter/?isDebug=1&_viewmode=0&isMock=1'
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);
    console.log('正在扫描图片...', $('img'));

    const imageData = [];

    // 2. 提取所有图片URL
    $('img').each((i, el) => {
      const src = $(el).attr('src');
      const srcset = $(el).attr('srcset');
      
      // 处理普通src
      if (src) {
        imageData.push(this.resolveUrl(url, src));
      }

      // 处理srcset (多个尺寸的图片)
      if (srcset) {
        srcset.split(',')
          .map(src => src.trim().split(' ')[0])
          .forEach(img => imageData.push(this.resolveUrl(url, img)));
      }
    });

    // 3. 获取每个图片的大小
    const results = await Promise.all(
      imageData.map(async imgUrl => {
        try {
          // 使用HEAD请求只获取响应头 (节省带宽)
          const { headers } = await axios.head(imgUrl, {
            maxRedirects: 5
          });
          
          return {
            url: imgUrl,
            size: parseInt(headers['content-length']) || 0,
            type: headers['content-type']
          };
        } catch (e) {
          return { url: imgUrl, error: e.message };
        }
      })
    );

    // 4. 输出结果
    console.log(`发现 ${results.length} 张图片:`);
    results.forEach((img, i) => {
      if (img.error) {
        console.log(`[图片 ${i+1}] ${img.url} - 错误: ${img.error}`);
      } else {
        const sizeMB = (img.size / 1024 / 1024).toFixed(2);
        console.log(`[图片 ${i+1}] ${img.url} - ${sizeMB} MB (${img.type})`);
      }
    });
    return `${html}`; // 返回HTML内容
  } catch (err) {
    console.error(`主流程错误: ${err.message}`);
  }
  return 'html';
}
// 辅助函数：处理相对路径
 resolveUrl(base, path) {
  try {
    return new URL(path, base).href;
  } catch {
    return path;
  }
}

  findOne(id: number) {
    return `This action returns a #${id} nanjiu`;
  }

  update(id: number, updateNanjiuDto: UpdateNanjiuDto) {
    return `This action updates a #${id} nanjiu`;
  }

  remove(id: number) {
    return `This action removes a #${id} nanjiu`;
  }
}
