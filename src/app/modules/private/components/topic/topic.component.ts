import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../http/blog.service';
import { TopicService } from '../../http/topic.service';
import { TopicDto } from '../../models/topic-dto';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  subjectId:any;
  subjectName:any;
topicId:any;
  topicName:any;
  showForm = false;
  saveMethod = false;

  topicDto!:TopicDto[];
  topicData=new TopicDto;
  constructor(private route:ActivatedRoute,private blogService:BlogService,private topicService:TopicService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.subjectId = data['subjectId'];
      this.subjectName = data['subjectName'];
    }
    )
    this.blogService.getTopicDto(this.subjectId).subscribe((data: TopicDto[])=> {
      this.topicDto = data;
      
    }
    )
  }


  enableForm() {
    this.showForm = true;
  }
  disableForm() {
    this.showForm = false;
    this.disableFields();
  }


  enableSave() {
    this.saveMethod = true;
    
  }

  disableFields() {
    
    this.topicName=null;
  }

  setTopicDto(topic: TopicDto) {
   
    this.topicName=topic.topicName;
    this.topicId=topic.topicId;

    this.enableForm();
  }

  onSubmitSave(form: Form) {
    this.disableForm();
    if (this.saveMethod == true) {
      this.addtopic(form, this.subjectId);
      this.saveMethod = false;
    }
    else {
      console.log(this.topicId);
      this.updateTopic(form,this.topicId);
    }

  }

  addtopic(topic: any, categoryId: any) {
    this.blogService.saveTopic(topic, categoryId).subscribe((data) => {
      console.log(data);

      this.ngOnInit();
    });
  }

  updateTopic(topic:any,topicId:any)
  {
    this.topicService.updateTopic(topic,topicId).subscribe((data=>{
      console.log(data)
      this.ngOnInit();
    }));
  }
  deleteTopic(topicId:any)
  {
    this.topicService.deleteTopic(topicId).subscribe((data=>{
      this.ngOnInit();
    }))
  }

}
